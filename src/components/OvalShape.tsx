import React from "react";
import { AppProps } from "../types";
import { useDrag } from "react-dnd";
import { classNames } from "../constants";

const OvalShape = ({ id }: AppProps) => {
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
          : "text-gray-400 hover:text-white hover:bg-[#cf2c91]",
        "w-200 py-2 bg-[#cf2c91] rounded-full text-center"
      )}
    >
      {id}
    </div>
  );
};

export default OvalShape;
