import { Record } from './common';

export type Game = Record<{
  title: string;
  description: string;
  createdAt: string;
  price: number;
  publishedAt: string;
  short_description: string;
  updatedAt: string;
  genres: {
    data: Record<{
      title: string;
      createdAt: string;
      publishedAt: string;
      updatedAt: string;
    }>[];
  };
}>;
