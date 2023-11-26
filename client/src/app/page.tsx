import React, { useMemo } from 'react';
import { DataGrid } from '../components';
import { ColumnDef } from '@tanstack/react-table';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const Home: React.FC = () => {
  const columns: ColumnDef<ReturnType<typeof createData>>[] = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Dessert (100g serving)',
      },
      {
        accessorKey: 'calories',
        header: 'Calories',
      },
      {
        accessorKey: 'fat',
        header: 'Fat (g)',
      },
      {
        accessorKey: 'carbs',
        header: 'Carbs (g)',
      },
      {
        accessorKey: 'protein',
        header: 'Protein (g)',
      },
    ],
    [],
  );

  return <DataGrid columns={columns} data={data} />;
};
