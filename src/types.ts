export interface AppProps {
  id?: number;
  url?: string;
  svg?: string;
  top?: number;
  left?: number;
}
export interface DragItem {
  type: string;
}

export interface CollectProps {
  isDragging: boolean;
}

export interface shapeType {
  id: number;
  name: string;
  initial: string;
  component: ({ id }: AppProps) => JSX.Element;
  current: boolean;
}

// export interface pictureType {
//   id: number;
//   name: string;
//   svg: any;
//   top: number;
//   left: number;
// }
export interface pictureType {
  [key: string]: {
    id: number;
    name: string;
    svg: any;
    top: number;
    left: number;
    title: string;
  };
}
export interface dragItemType {
  type: string;
  id: string;
  top: number;
  left: number;
  svg: string;
}

export interface BoardItem {
  id: number;
  left: number;
  top: number;
  svg: string;
}


