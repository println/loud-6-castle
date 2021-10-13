import { PaginatedResponse } from '@modules/domain/star-wars/submodules/swapi/services/paginated-response';

export class Page<T> {
  public count: number;
  public next: null | string;
  public previous: null | string;
  public results: T[];

  constructor(response: PaginatedResponse<T>) {
    this.count = response.count;
    this.next = response.next;
    this.previous = response.previous;
    this.results = response.results;
  }

  getCurrent(): number {
    if (this.next) {
      return parseInt(this.next) - 1;
    } else if (this.previous) {
      return parseInt(this.previous) + 1;
    }
    return 1;
  }

  getPageSize(): number {
    return 10;
  }
}
