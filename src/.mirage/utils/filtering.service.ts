import { PAGING_KEYWORDS } from './paging.service';

const FILTER_KEYWORDS = ['sort', ...PAGING_KEYWORDS];

export class FilteringService {
  private readonly excludes = FILTER_KEYWORDS;

  constructor(private readonly data: any[]) {}

  filter(queryParams: {}) {
    const params = { ...queryParams };
    this.excludes.forEach((keyword) => delete params[keyword]);

    let result = [...this.data];
    Object.keys(params).forEach((key) => {
      result = result.filter((item) => {
        const query = params[key].trim().toLowerCase();
        const text = new String(item[key]).toString().trim().toLowerCase();
        return text.includes(query);
      });
    });

    return result;
  }
}
