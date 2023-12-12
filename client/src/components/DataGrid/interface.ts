import { ColumnDef, Row, RowSelectionState, SortingState } from '@tanstack/react-table';

export type DataGridProps<R> = {
  id: string;
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
  rowSelection?: {
    state: RowSelectionState;
    setState: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  };
};

export type Meta = {
  hideTooltip?: boolean;
  flexRender?: boolean;
};
