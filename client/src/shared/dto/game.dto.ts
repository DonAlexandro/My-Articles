export type GameFiltersDTO = {
  $or?: {
    [x: string]: {
      $containsi: string;
    };
  }[];
};
