import { FC } from 'react';

import { ISpotImageProps } from './SpotImage.types';
import './SpotImage.styles.scss';

const SpotImage: FC<ISpotImageProps> = ({
  image,
  color,
  spotWidth,
  spotHeight,
  imgWidth,
  imgHeight,
  imgTop,
  imgLeft,
}) => (
  <div className="spot">
    <div
      className="spot__spot"
      style={{
        backgroundColor: `${color}`,
        width: `${spotWidth ? `${spotWidth.toString()}vw` : '100vw'}`,
        height: `${spotHeight ? `${spotHeight.toString()}vw` : '100vw'}`,
      }}
    />
    <img
      className="spot__image"
      src={image}
      style={{
        width: `${imgWidth ? `${imgWidth.toString()}vw` : 'inherit'}`,
        height: `${imgHeight ? `${imgHeight.toString()}vw` : 'inherit'}`,
        top: `${imgTop ? `${imgTop.toString()}vw` : 0}`,
        left: `${imgLeft ? `${imgLeft.toString()}vw` : 0}`,
      }}
    />
  </div>
);

export default SpotImage;
