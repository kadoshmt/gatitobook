export interface Animal {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  comments: number;
  likes: number;
  userId: number;
}

export type Animais = Array<Animal>;
