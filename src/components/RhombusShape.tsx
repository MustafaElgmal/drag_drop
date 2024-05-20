import React from "react";
import { AppProps } from "../types";
import { useDrag } from "react-dnd";
import { classNames } from "../constants";

const RhombusShape = ({ id }: AppProps) => {
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
          : "text-gray-400 hover:text-white hover:bg-[#f48500]",
        "w-[40%] py-8 bg-[#f48500] transform rotate-45 text-center ms-20"
      )}
    >
      {id}
    </div>
  );
};

export default RhombusShape;
