import { ServerPaginatedResponse } from '@shared/api/swapi/server-paginated.reponse';

export const TOTAL_BY_PAGE = 10;
export const PAGING_KEYWORDS = ['page', 'limit'];

export class PagingService {
  private readonly itemsByPage = TOTAL_BY_PAGE;
  private readonly resource: string;
  private readonly pageQuery = PAGING_KEYWORDS[0];

  constructor(namespace: string, resource: string) {
    this.resource = namespace + resource;
  }

  create(data: any[], page: any, queryParams: {}): ServerPaginatedResponse<any> {
    const totalPages = Math.ceil(data.length / this.itemsByPage);

    page = parseInt(page);
    page = page > 1 ? page : 1;
    page = page > totalPages ? totalPages : page;

    const extraQueryParams = this.parseQueryParams(queryParams);
    const results = this.split(data, page);
    return this.build(results, page, data.length, totalPages, extraQueryParams);
  }

  private split(data: any[], page: number) {
    const indexes = {
      from: page * this.itemsByPage - this.itemsByPage,
      until: page * this.itemsByPage,
    };

    const storage = [...data];
    return storage.slice(indexes.from, indexes.until);
  }

  private build(
    results: any[],
    page: number,
    totalItems: number,
    totalPages: number,
    extraQueryParams: string
  ): ServerPaginatedResponse<any> {
    const next = page + 1 > totalPages ? null : page + 1;
    const prev = page - 1 < 1 ? null : page - 1;
    return {
      count: totalItems,
      next: next ? `${this.resource}?${this.pageQuery}=${next}${extraQueryParams}` : null,
      previous: prev ? `${this.resource}?${this.pageQuery}=${prev}${extraQueryParams}` : null,
      results: results,
    };
  }

  private parseQueryParams(queryParams: {}): string {
    const params: any = { ...queryParams };
    delete params[this.pageQuery];

    return Object.keys(params)
      .map((key) => '&' + key + '=' + params[key])
      .join();
  }
}
