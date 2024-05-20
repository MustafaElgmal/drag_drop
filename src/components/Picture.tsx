import React, { CSSProperties } from "react";
import { AppProps } from "../types";
import { useDrag } from "react-dnd";
import { classNames } from "../constants";

const Picture = ({ id, svg }: AppProps) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "box",
      item: { id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id]
  );
  return (
    <img
      src={svg}
      width={150}
      ref={drag}
      className={classNames(
        isDragging ? "border-solid border-[5px] border-green-800 fill " : "",
        ""
      )}
    />
  );
};

export default Picture;
