import { Image } from './image.model';

export interface Post {
  id: number;
  author: string;
  title: string;
  slug: string;
  readtime: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  image: Image;
};
