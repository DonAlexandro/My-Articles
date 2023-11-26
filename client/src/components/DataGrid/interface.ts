import { ColumnDef } from '@tanstack/react-table';

export type DataGridProps<R> = {
  columns: ColumnDef<R>[];
  data: R[];
};
