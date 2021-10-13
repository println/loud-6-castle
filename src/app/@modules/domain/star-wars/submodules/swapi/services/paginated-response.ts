export interface PaginatedResponse<T> {
  count: number;
  next: null | string;
  previous: null | string;
  results: T[];
}
