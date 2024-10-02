export interface Pagination {
  currrentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export class PaginatedResult<T> {
  itmes?: T;
  pagination?: Pagination;
}
