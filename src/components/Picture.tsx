import React, { CSSProperties } from "react";
import { AppProps } from "../types";
import { useDrag } from "react-dnd";
import { classNames } from "../constants";

const Picture = ({ id, top, left, svg }: AppProps) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "box",
      item: { id, top, left },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  );
  return (
    <img
      src={svg}
      width={150}
      style={{ top, left }}
      ref={drag}
      className={classNames(
        isDragging ? "border-solid border-[5px] border-green-800 fill " : "",
        ""
      )}
    />
  );
  
};

export default Picture;
