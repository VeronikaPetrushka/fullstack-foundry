import css from './WaterItem.module.css';
import Icon from '../../components/Icon/Icon';
import {BasicModal} from '../BasicModal/BasicModal';
import {DeleteWaterModal} from '../DeleteWaterModal/DeleteWaterModal';
import {useState} from 'react';
import WaterModal from '../WaterModal/WaterModal';

const WaterItem = ({day, id}) => {
    
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    
    const date = new Date(day.date);  
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const options24 = { hour: '2-digit', minute: '2-digit', hour12: false };const timeString = date.toLocaleTimeString('en-US', options);    
    const timeString24 = date.toLocaleTimeString('en-US', options24);
    
       
    const handleDelete = () => {
        setIsDeleteModalOpen(true);
      };
    
      const handleEdit = () => {
        setIsEditModalOpen(true);
      };
    
      const handleCloseDeleteModal = () => {
        setIsDeleteModalOpen(false);
      };
    
      const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
      };
            
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
                    <p>{day.amount} ml</p>
                </div>
                <div className={css.itemDate}>
                    <p>{timeString}</p>
                </div>
             </div>   
            
            <div className={css.btns}>
                
            <button type="button" className={css.changeBtn}
             onClick={handleEdit}
             >
                 <Icon 
              width={'14'} 
              height={'14'} 
              iconName="edit" 
              styles={css.btnIcon} 
            />
             </button>
            
            <button type="button" className={css.changeBtn} 
            onClick={handleDelete}
            >
                <Icon 
            width={'14'} 
            height={'14'} 
            iconName="trash" 
            styles={css.btnIcon} 
          />
            </button>
            
            </div>
            {isDeleteModalOpen && (
            <BasicModal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
                <DeleteWaterModal onClose={handleCloseDeleteModal} id={id} />
            </BasicModal>
      )}
            {isEditModalOpen && (
            <BasicModal isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
                <WaterModal onClose={handleCloseEditModal} id={id} initialAmount={day.amount} initialTime={timeString24} type="edit" />
            </BasicModal>
      )}
             
           </div>
         
    )
}
           
export default WaterItem;