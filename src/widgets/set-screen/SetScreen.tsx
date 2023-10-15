import { Button, SpotImage } from '../../shared/UI';
import { buttons } from './assets/constants';
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

    {/* set pack */}
    <div className="set__pack">
      {/* caption */}
      <h2 className="set__pack-caption">НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»</h2>

      {/* buttons */}
      <div className="set__pack-buttons">
        {buttons.map((button) => (
          <Button
            backgroundColor="black"
            border="1px solid #671D00"
            link={button.link}
            pb={4}
            pl={8}
            pr={9}
            pt={3}
            text={button.text}
            textColor="#671D00"
          />
        ))}
      </div>
    </div>
  </div>
);

export default SetScreen;
