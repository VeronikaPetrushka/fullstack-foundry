import sprite from '../../assets/icons.svg';
import PropTypes from 'prop-types';

const Icon = ({ width, height, iconName, styles }) => {
  return (
    <svg width={width} height={height} className={styles}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

Icon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default Icon;
