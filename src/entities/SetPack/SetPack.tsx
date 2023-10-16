import { FC } from 'react';

import { ISetPackProps } from './SetPack.types';
import './SetPack.styles.scss';

const SetPack: FC<ISetPackProps> = ({ setPack }) => (
  <table className="set-pack">
    <tbody className="set-pack-body">
      {setPack.map((item) => (
        <tr className="set-pack-body-row">
          <td className="set-pack-col-1 set-pack-body-col-1">
            <img
              className="set-pack-body-col-1-img"
              src={`/src/shared/assets/img/${item.image}`}
            />
          </td>
          <td className="set-pack-col-2 set-pack-body-col">{item.itemName}</td>
          <td className="set-pack-col-3 set-pack-body-col set-pack-body-col-3">
            {item.quantity1 ? item.quantity1 : '-'}
          </td>
          <td className="set-pack-col-4 set-pack-body-col set-pack-body-col-4">
            {item.quantity2 ? item.quantity2 : '-'}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default SetPack;
