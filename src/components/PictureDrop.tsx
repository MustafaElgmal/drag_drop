import React, { CSSProperties } from "react";
import { AppProps } from "../types";
const style: CSSProperties = {
  position: "absolute",
  cursor: "move",
};
const PictureDrop = ({ id, top, left, svg }: AppProps) => {
  return <img src={svg} width={150} style={{ ...style, top, left }} />;
};

export default PictureDrop;
