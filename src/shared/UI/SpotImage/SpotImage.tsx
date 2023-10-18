import { FC } from 'react';

import { ISpotImageProps } from './SpotImage.types';
import './SpotImage.styles.scss';

const SpotImage: FC<ISpotImageProps> = ({
  altText,
  image,
  color,
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
      }}
    />
    <img
      alt={altText}
      className="spot__image"
      src={image}
      style={{
        width: `${imgWidth ? `${imgWidth.toString()}%` : 'inherit'}`,
        height: `${imgHeight ? `${imgHeight.toString()}%` : 'inherit'}`,
        top: `${imgTop ? `${imgTop.toString()}%` : 0}`,
        left: `${imgLeft ? `${imgLeft.toString()}%` : 0}`,
      }}
    />
  </div>
);

export default SpotImage;
