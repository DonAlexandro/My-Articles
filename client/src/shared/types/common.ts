export type Response<D> = {
  data: D[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type Record<A> = {
  id: number;
  attributes: A;
};

export type ExportFormat = 'xlsx' | 'csv';
