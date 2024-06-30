import  { useState } from 'react';
import axios from 'axios';
import WaterItem from '../WaterItem/WaterItem';
import WaterModal from '../WaterModal/WaterModal';
import css from './WaterList.module.css';

const WaterList = ({ fetchDailyActivity, waterItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://aquatrack-api-myzh.onrender.com/api/water/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchDailyActivity(); 
    } catch (error) {
      console.error('Error deleting water item:', error);
    }
  };

  const handleModalClose = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  const handleSubmit = async (data) => {
    try {
      const token = localStorage.getItem('token');
      if (selectedItem) {
        await axios.put(`https://aquatrack-api-myzh.onrender.com/api/water/${selectedItem._id}`, {
          amount: data.amount,
          date: new Date(selectedItem.date).toISOString().split('T')[0]
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } else {
        await axios.post('https://aquatrack-api-myzh.onrender.com/api/water', {
          amount: data.amount,
          date: new Date().toISOString().split('T')[0]
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      fetchDailyActivity(); 
      handleModalClose();
    } catch (error) {
      console.error('Error submitting data:', error.response ? error.response.data : error.message);
      console.log('Error details:', error.response);
    }
  };

  return (
    <div className={css.container}>
      <ul className={css.waterList}>
        {waterItems.map(item => (
          <li className={css.waterItem} key={item._id}>
            <WaterItem item={item} onEdit={() => handleEdit(item)} onDelete={() => handleDelete(item._id)} />
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
    </div>
  );
};

export default WaterList;
