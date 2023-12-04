import { Record } from '.';

export type Genre = Record<{
  title: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}>;
