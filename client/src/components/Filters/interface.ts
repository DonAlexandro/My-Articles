export type FiltersType = {
  name: string;
  key: string;
  data: { id: number; label: string; value: string }[];
};

export type FiltersStateType = { [key: string]: string[] | number[] };
