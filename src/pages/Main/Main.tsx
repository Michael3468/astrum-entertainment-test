import EditionImage from '../../shared/assets/img/boxes.png';
import { CollectorsEdition, SetScreen } from '../../widgets';

import './Main.styles.scss';

const Main = () => (
  <main className="main-page">
    <CollectorsEdition
      caption="КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ"
      editionImage={EditionImage}
      text="Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!"
    />

    <SetScreen />
  </main>
);

export default Main;
