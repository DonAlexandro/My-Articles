import { ColumnDef, Row } from '@tanstack/react-table';

export type DataGridProps<R> = {
  columns: ColumnDef<R>[];
  data?: R[];
  loading?: boolean;
  setCollapsible?: (row: Row<R>) => JSX.Element;
};

export type Meta = {
  hideTooltip?: boolean;
};
