import { FC } from 'react';

import { Button } from '../../shared/UI';
import styles from './Box.module.scss';
import { IBoxProps } from './Box.types';

const Box: FC<IBoxProps> = ({ image, price }) => (
  <div className={styles.box}>
    <img alt="Box with game" className={styles.image} src={image} />

    <div className={styles.order}>
      <span className={styles.price}>{`${price} ₽`}</span>

      <div className={styles.button}>
        <Button
          backgroundColor="yellow"
          borderRadius={5}
          link="/buy"
          text="ПРИОБРЕСТИ"
          textColor="black"
        />
      </div>
    </div>
  </div>
);

export default Box;
