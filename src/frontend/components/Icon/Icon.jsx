import { IconsManifest } from 'react-icons';
import sprite from '../../../../assets/icons.svg';
const Icon = ({ width, height, iconName, styles }) => {
  return (
    <svg width={width} height={height} className={styles}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
