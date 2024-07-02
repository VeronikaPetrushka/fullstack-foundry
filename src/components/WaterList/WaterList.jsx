import { useState } from 'react';
import { useDispatch } from 'react-redux';
import WaterItem from '../WaterItem/WaterItem';
import WaterModal from '../WaterModal/WaterModal';
import { DeleteWaterModal } from '../DeleteWaterModal/DeleteWaterModal';
import { addWater, editWater } from '../../redux/water/operations';
import css from './WaterList.module.css';
import BasicModal from '../BasicModal/BasicModal';
import { selectWaterDaily } from '../../redux/water/selectors';
import { useSelector } from 'react-redux';


const WaterList = () => {

  const waterItems = useSelector(selectWaterDaily);

  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
// =======
//   useEffect(() => {
//     console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Оновлення списку водних елементів`, waterItems);
//   }, [waterItems]);

//   const handleEdit = (item) => {
//     setSelectedItem(item);
//     setIsModalOpen(true);
//     console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Редагування елемента води`, item);
// >>>>>>> main
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setSelectedItem(null);
    setIsDeleteModalOpen(false);
// <<<<<<< frontend
// =======
//     fetchDailyActivity();
//     console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Модальне вікно видалення закрито`);
// >>>>>>> main
  };

  const handleSubmit = async (data) => {
    try {
      if (selectedItem) {
        await dispatch(editWater({
          id: selectedItem._id,
          formData: {
            amount: data.amount,
            date: data.date,
          },
        })).unwrap();
      } else {
        await dispatch(addWater({
          amount: data.amount,
          date: data.date,
        })).unwrap();
      }
      handleModalClose();
    } catch (error) {
      console.error('Помилка при надсиланні даних:', error);
    }
  };

  return (
    <div className={css.container}>
      <ul className={css.waterList}>
        {waterItems.map(item => (
          <li className={css.waterItem} key={item._id}>
            <WaterItem item={item} onEdit={() => handleEdit(item)} onDelete={() => handleDelete(item)} />
          </li>
        ))}
      </ul>
      <WaterModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        initialData={selectedItem}
        onSubmit={handleSubmit}
        type={selectedItem ? 'edit' : 'add'}
      />
      <BasicModal isOpen={isDeleteModalOpen} onClose={handleDeleteModalClose}>
        {isDeleteModalOpen && (
        <DeleteWaterModal
          onClose={handleDeleteModalClose}
          id={selectedItem?._id}
        />
      )}
      </BasicModal>
    </div>
  );
};

export default WaterList;