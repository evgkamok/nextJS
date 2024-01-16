import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  font_size?: "s" | "m" | "l",
  children: ReactNode
}