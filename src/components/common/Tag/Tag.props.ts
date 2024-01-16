import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m",
  color: "gray" | "white" | "red" | "green" | "primary",
  href?: string,
  children: ReactNode,
}