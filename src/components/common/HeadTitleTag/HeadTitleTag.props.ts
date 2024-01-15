import type { ReactNode } from "react";

export default interface HeadTitleTagProps {
  tag: "h1" | "h2" | "h3",
  children: ReactNode
}