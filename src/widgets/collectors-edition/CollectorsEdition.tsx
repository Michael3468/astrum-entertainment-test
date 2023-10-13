import Background from './assets/img/Hue_Saturation_5_1.jpg';
import LayerLeft from './assets/img/Layer_157_1.png';
import LayerRight from './assets/img/Layer_157_2.png';
import MafiaCostumeLeft from './assets/img/MafiaCostume_2022_2.png';
import MafiaCostumeRight from './assets/img/MafiaCostume_2022_3.png';

import './CollectorsEdition.styles.scss';

const CollectorsEdition = () => (
  <div className="collectors-edition">
    <img className="collectors-edition__background" src={Background} />
    <img className="collectors-edition__layer_left" src={LayerLeft} />
    <img className="collectors-edition__layer_right" src={LayerRight} />
    <img className="collectors-edition__mafia-costume_left" src={MafiaCostumeLeft} />
    <img className="collectors-edition__mafia-costume_right" src={MafiaCostumeRight} />
  </div>
);

export default CollectorsEdition;
