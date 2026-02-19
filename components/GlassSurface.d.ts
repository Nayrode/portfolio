import { CSSProperties, ReactNode } from "react";

export interface GlassSurfaceProps {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: string;
  yChannel?: string;
  mixBlendMode?: CSSProperties["mixBlendMode"];
  className?: string;
  style?: CSSProperties;
}

declare const GlassSurface: (props: GlassSurfaceProps) => JSX.Element;

export default GlassSurface;
