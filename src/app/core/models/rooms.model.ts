export interface IRoom {
  id: string;
  name: string;
  description: string;
  type: RoomType;
  image: IImage;
}

type RoomType = 'standard' | 'delux';

export interface IImage {
  id?: string;
  name: string;
}
