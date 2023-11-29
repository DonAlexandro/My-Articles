import { ColumnDef, Row } from '@tanstack/react-table';

export type DataGridProps<R> = {
  columns: ColumnDef<R>[];
  data?: R[];
  loading?: boolean;
  setCollapsible?: (row: Row<R>) => JSX.Element;
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
};

export type Meta = {
  hideTooltip?: boolean;
};
