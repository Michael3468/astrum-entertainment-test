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
}) => {
  const paddings = {
    paddingTop: `${pt ? `${pt}px` : ''}`,
    paddingLeft: `${pl ? `${pl}px` : ''}`,
    paddingRight: `${pr ? `${pr}px` : ''}`,
    paddingBottom: `${pb ? `${pb}px` : ''}`,
    padding: `${p ? `${p}px` : ''}`,
  };

  return (
    <button
      className={styles.button}
      style={{
        color: `${textColor || 'black'}`,
        backgroundColor: `${backgroundColor || 'white'}`,
        border: `${border || 'none'}`,
        borderRadius: `${borderRadius || 0}px`,
        ...(!link ? paddings : {}),
      }}
      type="button"
    >
      {link ? (
        <Link
          className={styles.link}
          style={{
            color: textColor,
            ...paddings,
          }}
          to={link}
        >
          {text}
        </Link>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
