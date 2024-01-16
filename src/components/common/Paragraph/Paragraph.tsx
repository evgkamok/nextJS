import ParagraphProps from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export default function Paragraph({ children, className, font_size = "m", ...props }: ParagraphProps): JSX.Element {
  return (
    <p className={cn(className, styles.p, {
      [styles.small]: font_size === "s",
      [styles.medium]: font_size === "m",
      [styles.large]: font_size === 'l'
    })}
      {...props}
    >
      {children}
    </p>
  );
}
