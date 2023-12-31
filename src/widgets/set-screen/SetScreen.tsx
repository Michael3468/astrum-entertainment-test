import { Box, SetPack } from '../../entities';
import BoxImage from '../../entities/Box/assets/img/box.png';
import { Button, SpotImage } from '../../shared/UI';
import Vito from '../../shared/UI/SpotImage/assets/img/Vito_1.png';
import { buttons, setPack1 } from './assets/constants';
import GlowBottom from './assets/img/BLUE_GLOW_1.png';

import './SetScreen.styles.scss';

const SetScreen = () => (
  <div className="set">
    {/* dog */}
    <div className="set__animal">
      <div className="set__animal-position">
        <SpotImage
          altText="Vito"
          color="#416df4"
          image={Vito}
          imgHeight={136.5}
          imgLeft={19.2}
          imgTop={-26.5}
          imgWidth={68.5}
        />
      </div>
    </div>

    {/* set pack */}
    <div className="set__pack">
      {/* caption */}
      <h2 className="set__pack-caption">НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>

      {/* buttons */}
      <div className="set__pack-buttons">
        {buttons.map((button) => (
          <div key={button.text} className="set__pack-button">
            <Button
              backgroundColor="black"
              border="1px solid rgba(103, 29, 0, 0.48)"
              link={button.link}
              text={button.text}
              textColor="#671D00"
            />
          </div>
        ))}
      </div>

      <div className="set__pack-table">
        <SetPack setPack={setPack1} />
      </div>

      <div className="set__pack-order">
        <Box image={BoxImage} price={399} />
      </div>
    </div>

    <img alt="" className="set__pack-glow" src={GlowBottom} />
  </div>
);

export default SetScreen;
