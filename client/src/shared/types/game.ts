import { Record } from './common';
import { Genre } from './genre';

export type Game = Record<{
  title: string;
  description: string;
  createdAt: string;
  price: number;
  publishedAt: string;
  short_description: string;
  updatedAt: string;
  genres: {
    data: Genre[];
  };
}>;
