import { ColumnDef, Row, SortingState } from '@tanstack/react-table';

export type DataGridProps<R> = {
  columns: ColumnDef<R>[];
  data?: R[];
  loading?: boolean;
  setCollapsible?: (row: Row<R>) => JSX.Element;
  search?: string;
  pagination?: {
    count?: number;
    page: number;
    pageSize: number;
    setState: React.Dispatch<
      React.SetStateAction<{
        page: number;
        pageSize: number;
      }>
    >;
  };
  sorting?: {
    state: SortingState;
    setState: React.Dispatch<React.SetStateAction<SortingState>>;
  };
};

export type Meta = {
  hideTooltip?: boolean;
  flexRender?: boolean;
};
