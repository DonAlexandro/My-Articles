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
  const mappedArrays: {
    [key: string]: { $in: string[] } | { [key: string]: { $in: string[] } };
  } = {};

  for (const key in arrays) {
    if (arrays[key].length) {
      mappedArrays[key] = relationFields ? { [relationFields[key]]: { $in: arrays[key] } } : { $in: arrays[key] };
    }
  }

  return mappedArrays;
};
