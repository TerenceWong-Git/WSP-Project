export interface Post {
  id: number;
  title: string;
  content: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
}

export interface User {
  id: number;
  name: string;
  password: string;
}

export interface Comment {
  id: number;
  content: string;
  created_at: Date;
  updated_at: Date;
  user_id: number;
  post_id: number;
}
