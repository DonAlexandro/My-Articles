import { Genre } from '../../shared/types';

export const mapGenresToFilters = (genres?: Genre[]) => {
  return {
    name: 'Genres',
    key: 'genres',
    data:
      genres?.map((genre) => ({
        id: genre.id,
        label: genre.attributes.title,
        value: genre.attributes.title,
      })) ?? [],
  };
};
