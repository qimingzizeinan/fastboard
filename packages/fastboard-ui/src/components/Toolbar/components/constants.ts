import type { Appliance, Color } from "@netless/fastboard-core";
import type { I18nData } from "../../../typings";
import Icons from "../../Icons";

export const colors: Record<string, Color> = {
  "#E02020": [224, 32, 32],
  "#F7B500": [247, 181, 0],
  "#6DD400": [109, 212, 0],
  "#32C5FF": [50, 197, 255],
  "#0091FF": [0, 145, 255],
  "#6236FF": [98, 54, 255],
  "#B620E0": [182, 32, 224],
  "#6D7278": [109, 114, 120],
};

export const shapes = [
  "rectangle",
  "ellipse",
  "straight",
  "arrow",
  "pentagram",
  "rhombus",
  "triangle",
  "speechBalloon",
] as const;

export type Shape = (typeof shapes)[number];

export const applianceShapes = shapes.slice(0, 4) as Appliance[];

export const shapesIcon: Record<Shape, any> = {
  rectangle: Icons.Rectangle,
  ellipse: Icons.Circle,
  straight: Icons.Line,
  arrow: Icons.Arrow,
  pentagram: Icons.Star,
  rhombus: Icons.Rhombus,
  triangle: Icons.Triangle,
  speechBalloon: Icons.Balloon,
};

export const shapesIconActive: Record<Shape, any> = {
  rectangle: Icons.RectangleBolded,
  ellipse: Icons.CircleBolded,
  straight: Icons.LineBolded,
  arrow: Icons.ArrowBolded,
  pentagram: Icons.StarBolded,
  rhombus: Icons.RhombusBolded,
  triangle: Icons.TriangleBolded,
  speechBalloon: Icons.BalloonBolded,
};

export const erasers = ["eraser", "pencilEraser"] as const;

export type Eraser = (typeof erasers)[number];

export const eraserIcon: Record<Eraser, any> = {
  eraser: Icons.Eraser,
  pencilEraser: Icons.PencilEraser,
};

export const eraserIconActive: Record<Eraser, any> = {
  eraser: Icons.EraserFilled,
  pencilEraser: Icons.PencilEraserFilled,
};

export const i18n: I18nData<
  | "clicker"
  | "selector"
  | "pencil"
  | "pencilEraser"
  | "text"
  | "shapes"
  | "eraser"
  | "clear"
  | "apps"
  | "courseware"
  | "share"
  | "more"
> = {
  en: {
    clicker: "clicker",
    selector: "selector",
    pencil: "pencil",
    eraser: "eraser",
    pencilEraser: "eraser",
    text: "text",
    shapes: "shapes",
    clear: "clear",
    apps: "apps",
    courseware: "courseware",
    share: "share",
    more: "more",
  },
  "zh-CN": {
    clicker: "点击",
    selector: "选中",
    pencil: "画笔",
    eraser: "橡皮",
    pencilEraser: "板擦",
    text: "文字",
    shapes: "形状",
    clear: "清屏",
    apps: "Apps",
    courseware: "课件",
    share: "共享屏幕",
    more: "更多",
  },
};

export const colorKeys = Object.keys(colors);
