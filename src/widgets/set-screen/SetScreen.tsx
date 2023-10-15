import { SpotImage } from '../../shared/UI';
import Vito from './assets/img/Vito_1.png';

import './SetScreen.styles.scss';

const SetScreen = () => (
  <div className="set">
    {/* dog */}
    <div className="set__animal">
      <SpotImage
        color="#416df4"
        image={Vito}
        imgHeight={46.5}
        imgLeft={6.6}
        imgTop={-9.05}
        imgWidth={23.1}
        spotHeight={34}
        spotWidth={34}
      />
    </div>

    <div className="set__pack">
      <h2 className="set__pack-caption">НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>
    </div>
  </div>
);

export default SetScreen;
