import React from "react";
import { AppProps, CollectProps, DragItem } from "../types";
import { DragSourceMonitor, useDrag } from "react-dnd";
import { classNames } from "../constants";

const RectangleShape = ({ id }: AppProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={classNames(
        isDragging
          ? "border-solid border-[5px] border-green-600 text-white"
          : "text-gray-400 hover:text-white hover:bg-[#1f80ff]",
        "w-200 py-4 bg-[#1f80ff] text-center"
      )}
    >
      {id}
    </div>
  );
};

export default RectangleShape;
