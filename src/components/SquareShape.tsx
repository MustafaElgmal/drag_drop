import React from "react";
import { AppProps } from "../types";
import { useDrag } from "react-dnd";
import { classNames } from "../constants";

const SquareShape = ({ id }: AppProps) => {
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
          : "text-gray-400 hover:text-white hover:bg-red-500",
        "w-[50%] py-6 bg-red-500 text-center  ms-14"
      )}
    >
      {id}
    </div>
  );
};

export default SquareShape;
