import { useState, useEffect } from 'react';
import axios from 'axios';
import WaterItem from '../WaterItem/WaterItem';
import WaterModal from '../WaterModal/WaterModal';
import { DeleteWaterModal } from '../DeleteWaterModal/DeleteWaterModal';
import css from './WaterList.module.css';

const WaterList = ({ fetchDailyActivity, waterItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Оновлення списку водних елементів`, waterItems);
  }, [waterItems]);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Редагування елемента води`, item);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
    console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Видалення елемента води`, item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
    console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Модальне вікно закрито`);
  };

  const handleDeleteModalClose = () => {
    setSelectedItem(null);
    setIsDeleteModalOpen(false);
    fetchDailyActivity();
    console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Модальне вікно видалення закрито`);
  };

  const handleSubmit = async (data) => {
    try {
      const token = localStorage.getItem('token');
      if (selectedItem) {
        await axios.put(`https://aquatrack-api-myzh.onrender.com/api/water/${selectedItem._id}`, {
          amount: data.amount,
          date: data.date,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Оновлено елемент води`, data);
      } else {
        await axios.post('https://aquatrack-api-myzh.onrender.com/api/water', {
          amount: data.amount,
          date: data.date,
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(`[WaterList] ${new Date().toLocaleTimeString()}: Додано новий елемент води`, data);
      }
      fetchDailyActivity();
      handleModalClose();
    } catch (error) {
      console.error('Помилка при надсиланні даних:', error.response ? error.response.data : error.message);
      console.log('Деталі помилки:', error.response);
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
      {isDeleteModalOpen && (
        <DeleteWaterModal
          onClose={handleDeleteModalClose}
          id={selectedItem?._id}
          fetchDailyActivity={fetchDailyActivity} // Передаємо функцію для оновлення списку
        />
      )}
    </div>
  );
};

export default WaterList;
