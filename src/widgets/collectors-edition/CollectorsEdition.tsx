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

const CollectorsEdition: FC<ICollectorsEditionProps> = ({ editionImage }) => (
  <div className="collectors-edition">
    <img className="collectors-edition__background" src={Background} />
    <img className="collectors-edition__layer_left" src={LayerLeft} />
    <img className="collectors-edition__layer_right" src={LayerRight} />
    <img className="collectors-edition__mafia-costume_left" src={MafiaCostumeLeft} />
    <img className="collectors-edition__mafia-costume_right" src={MafiaCostumeRight} />
    <img className="collectors-edition__layer_bottom" src={LayerBottom} />
    <img className="collectors-edition__glow_bottom" src={GlowBottom} />
    <img className="collectors-edition__glow_center" src={GlowCenter} />
    <img className="collectors-edition__logo" src={Logo} />

    <img className="collectors-edition__edition-image" src={editionImage} />
  </div>
);

export default CollectorsEdition;
