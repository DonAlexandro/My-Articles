type InFilterArrayType = {
  [key: string]: { $in: string[] } | { [key: string]: { $in: string[] } };
};

type RangeFilterArrayType = {
  [key: string]: {
    $gte: number;
    $lte: number;
  };
};

export const mapStringToSearchFilter = (search: string, fields: string[]) => {
  return search
    ? {
        $or: fields.map((field) => ({
          [field]: { $containsi: search },
        })),
      }
    : {};
};

export const mapArraysToInFilter = (
  arrays: { [key: string]: string[] },
  relationFields?: { [key: string]: string },
) => {
  const mappedArrays: InFilterArrayType = {};

  for (const key in arrays) {
    if (arrays[key].length) {
      mappedArrays[key] = relationFields ? { [relationFields[key]]: { $in: arrays[key] } } : { $in: arrays[key] };
    }
  }

  return mappedArrays;
};

export const mapArraysToRangeFilters = (arrays: { [key: string]: number[] }) => {
  const mappedArrays: RangeFilterArrayType = {};

  for (const key in arrays) {
    if (arrays[key].length) {
      mappedArrays[key] = { $gte: arrays[key][0], $lte: arrays[key][1] };
    }
  }

  return mappedArrays;
};
