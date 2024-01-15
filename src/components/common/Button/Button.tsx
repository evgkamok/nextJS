import ButtonProps from "./Button.props";
import cn from 'classnames';
import styles from './Button.module.css';
import ArrowIcon from '../../assets/arrow_icon.svg';

export default function Button({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element {
  return <>
    <button className={cn(className, styles.button, {
      [styles.primary]: appearance == 'primary',
      [styles.ghost]: appearance == 'ghost'
    })}
      {...props}
    >

      {children}

      {arrow != 'none' && <ArrowIcon
        className={cn(styles.arrow, {
          [styles.right]: arrow == 'right',
          [styles.down]: arrow == 'down'
        })}
      />}

    </button>
  </>;
}