import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Button.styles.module.scss';
import { IButtonProps } from './Button.types';

const Button: FC<IButtonProps> = ({
  link,
  text,
  textColor,
  backgroundColor,
  pt,
  pl,
  pr,
  pb,
  p,
  border,
  borderRadius,
}) => (
  <button
    className={styles.button}
    style={{
      color: `${textColor || 'black'}`,
      backgroundColor: `${backgroundColor || 'white'}`,
      paddingTop: `${pt || 0}px`,
      paddingLeft: `${pl || 0}px`,
      paddingRight: `${pr || 0}px`,
      paddingBottom: `${pb || 0}px`,
      padding: `${p || ''}px`,
      border: `${border || 'none'}`,
      borderRadius: `${borderRadius || 0}px`,
    }}
    type="button"
  >
    {link ? (
      <Link style={{ color: textColor }} to={link}>
        {text}
      </Link>
    ) : (
      text
    )}
  </button>
);

export default Button;
