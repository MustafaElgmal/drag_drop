import React, { CSSProperties, useEffect, useState } from "react";
import { XYCoord, useDrop } from "react-dnd";
import Picture from "../components/Picture";
import PictureDrop from "../components/PictureDrop";
import { BoardItem, dragItemType } from "../types";
import { picturesList } from "../constants";
import { moveToBoard } from "../utils/functions";

const DragDrop = () => {
  const [board, setBoard] = useState<BoardItem[]>([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop(item: dragItemType, monitor) {
      console.log(item)
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      const newItem = picturesList.filter((pic) => pic.id === +item.id);
      moveToBoard(+item.id, left, top, newItem[0].svg, setBoard);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <>
      <div>
        {picturesList.map((pic) => (
          <Picture id={pic.id} top={pic.top} left={pic.left} svg={pic.svg} />
        ))}
      </div>
      <div
        style={{
          width:1300,
          height: 400,
          border: "1px solid black",
          position: "relative",
        }}
        ref={drop}
      >
        {board.map((pic) => {
          return (
            <Picture
              id={pic.id}
              top={pic.top}
              left={pic.left}
              svg={pic.svg}
            />
          );
        })}
      </div>
    </>
  );
};

export default DragDrop;
