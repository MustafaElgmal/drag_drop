import OvalShape from "../components/OvalShape";
import RectangleShape from "../components/RectangleShape";
import RhombusShape from "../components/RhombusShape";
import SquareShape from "../components/SquareShape";
import Rectangle from "../svgs/rectangle.svg";
import Cupe from "../svgs/cupe.svg";
import Oval from "../svgs/oval.svg";
import Rhmosbus from "../svgs/Rhombus.svg";
import Arrow from "../svgs/arrow.svg";
import LeftArrow from "../svgs/leftArrow.svg";

export function classNames(
  ...classes: (string | undefined | null | false)[]
): string {
  return classes.filter(Boolean).join(" ");
}

export const shapes = [
  {
    id: 1,
    name: "Rectangle",
    initial: "R",
    component: RectangleShape,
    current: false,
  },
  {
    id: 2,
    name: "Square",
    initial: "S",
    component: SquareShape,
    current: false,
  },
  { id: 3, name: "Oval", initial: "O", component: OvalShape, current: false },
  {
    id: 4,
    name: "Rhombus",
    initial: "Rh",
    component: RhombusShape,
    current: false,
  },
];

export const picturesList = [
  {
    id: 1,
    name: "Cupe",
    svg: Cupe,
    top:20,
    left:80
  },
  {
    id: 2,
    name: "Rectangle",
    svg: Rectangle,
    top:20,
    left:80
  },
  {
    id: 3,
    name: "Oval",
    svg: Oval,
    top:180,
    left:20
  },
  {
    id: 4,
    name: "Rhmosbus",
    svg: Rhmosbus,
    top:20,
    left:80
  },
  {
    id: 5,
    name: "Arrow",
    svg: Arrow,
    top:20,
    left:80
  },
  {
    id: 6,
    name: "Arrow",
    svg: LeftArrow,
    top:20,
    left:80
  },
];
