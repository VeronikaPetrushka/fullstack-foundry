import PropTypes from 'prop-types';
import css from './WaterItem.module.css';
import Icon from '../../components/Icon/Icon';

const WaterItem = ({ item, onEdit, onDelete }) => {
  const { amount, date } = item;

  if (!date) {
    // console.error('Помилка: item.createdAt не визначено', item);
    return null;
  }

  const handleEdit = () => {
    // console.log(`[WaterItem] ${new Date().toLocaleTimeString()}: Редагування елемента води`, item);
    onEdit();
  };

  const handleDelete = () => {
    // console.log(`[WaterItem] ${new Date().toLocaleTimeString()}: Видалення елемента води`, item._id);
    onDelete();
  };

  const displayTime = new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  // console.log(`[WaterItem] ${new Date().toLocaleTimeString()}: Відображення елемента води`, item);

  return (
    <div className={css.item}>
      <Icon
        width={'38'}
        height={'38'}
        iconName="glass"
        styles={css.icon}
      />
      <div className={css.itemContent}>
        <div className={css.itemAmount}>
          <p>{amount} ml</p>
        </div>
        <div className={css.itemDate}>
          <p>{displayTime}</p>
        </div>
      </div>
      <div className={css.btns}>
        <button type="button" className={css.changeBtn} onClick={handleEdit}>
          <Icon
            width={'14'}
            height={'14'}
            iconName="edit"
            styles={css.btnIcon}
          />
        </button>
        <button type="button" className={css.changeBtn} onClick={handleDelete}>
          <Icon
            width={'14'}
            height={'14'}
            iconName="trash"
            styles={css.btnIcon}
          />
        </button>
      </div>
    </div>
  );
};

WaterItem.propTypes = {
  item: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default WaterItem;
