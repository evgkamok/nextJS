import TagProps from "./Tag.props";
import cn from 'classnames';
import styles from './Tag.module.css';

export default function Tag({ size = "m", color = "white", href, className, children, ...props }: TagProps): JSX.Element {
  return (
    <div
      className={cn(className, styles.tag, {
        [styles.small]: size == 's',
        [styles.medium]: size == 'm',
        [styles.gray]: color == 'gray',
        [styles.white]: color == 'white',
        [styles.green]: color == 'green',
        [styles.red]: color == 'red',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {
        href
          ? <a href={href}>{children}</a>
          : <>{children}</>
      }
    </div>
  );
}
