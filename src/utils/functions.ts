import { picturesList, shapes } from "../constants";
import { BoardItem, pictureType, shapeType } from "../types";

export const moveToBoard = (id: number,left:number,top:number,svg:string, setBoard: Function) => {
  setBoard((board: BoardItem[]) => [...board,{id,top,left,svg}]);
  
};
