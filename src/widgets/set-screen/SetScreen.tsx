import { SetPack } from '../../entities';
import Vito from '../../shared/assets/img/Vito_1.png';
import { Button, SpotImage } from '../../shared/UI';
import { buttons, setPack } from './assets/constants';

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

    {/* set pack */}
    <div className="set__pack">
      {/* caption */}
      <h2 className="set__pack-caption">НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>

      {/* buttons */}
      <div className="set__pack-buttons">
        {buttons.map((button) => (
          <div className="set__pack-button">
            <Button
              backgroundColor="black"
              border="1px solid rgba(103, 29, 0, 0.48)"
              link={button.link}
              pb={4}
              pt={2}
              text={button.text}
              textColor="#671D00"
            />
          </div>
        ))}
      </div>

      <div className="set__pack-table">
        <SetPack setPack={setPack} />
      </div>
    </div>
  </div>
);

export default SetScreen;
