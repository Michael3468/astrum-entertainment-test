import { FC } from 'react';

import GlowBottom from './assets/img/BLUE_GLOW_3.png';
import GlowCenter from './assets/img/glow_1.png';
import Background from './assets/img/Hue_Saturation_5_1.jpg';
import LayerLeft from './assets/img/Layer_157_1.png';
import LayerRight from './assets/img/Layer_157_2.png';
import LayerBottom from './assets/img/Layer_157_3.png';
import Logo from './assets/img/logo.png';
import MafiaCostumeLeft from './assets/img/MafiaCostume_2022_2.png';
import MafiaCostumeRight from './assets/img/MafiaCostume_2022_3.png';
import { ICollectorsEditionProps } from './CollectorsEdition.types';

import './CollectorsEdition.styles.scss';

const CollectorsEdition: FC<ICollectorsEditionProps> = ({ editionImage, caption, text }) => (
  <div className="collectors-edition">
    {/* background and images */}
    <img alt="background" className="collectors-edition__background" src={Background} />
    <img alt="" className="collectors-edition__layer_left" src={LayerLeft} />
    <img alt="" className="collectors-edition__layer_right" src={LayerRight} />
    <img alt="" className="collectors-edition__mafia-costume_left" src={MafiaCostumeLeft} />
    <img alt="" className="collectors-edition__mafia-costume_right" src={MafiaCostumeRight} />
    <img alt="" className="collectors-edition__layer_bottom" src={LayerBottom} />
    <img alt="" className="collectors-edition__glow_bottom" src={GlowBottom} />
    <img alt="" className="collectors-edition__glow_center" src={GlowCenter} />
    <img alt="allods logo" className="collectors-edition__logo" src={Logo} />

    {/* edition image */}
    <img alt="edition image" className="collectors-edition__edition-image" src={editionImage} />

    {/* text */}
    <div className="collectors-edition__info">
      <h1 className="collectors-edition__caption">{caption.toUpperCase()}</h1>
      <p className="collectors-edition__text">{text}</p>
    </div>
  </div>
);

export default CollectorsEdition;
