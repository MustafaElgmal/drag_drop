import React, { CSSProperties, useState } from "react";
import { AppProps } from "../types";
import { useDrag } from "@use-gesture/react";
const PictureDrop = ({ id, top, left, svg }: AppProps) => {
  const [picPosition, setPicPosition] = useState({ top, left });
  const pindPic = useDrag((params: any) => {
    setPicPosition({ top: params.offset[1], left: params.offset[0] });
  });
  return (
    <div
      {...pindPic()}
      style={{
        position: "relative",
        top: picPosition.top,
        left: picPosition.left,
        cursor: "move",
      }}
    >
      <img src={svg} width={150} />
    </div>
  );
};

export default PictureDrop;
