
import css from './WaterItem.module.css';
import Icon from '../../components/Icon/Icon';


const WaterItem = () => {
    // const { id, date, volume } = item;
    return (
           <div className={css.item}>
             <Icon
              
              width={38} 
              height={38} 
              iconName="glass" 
              styles={css.icon} 
            />
             <div className={css.itemContent}>
                <div className={css.itemAmount}>
                    <p>250 ml</p>
                </div>
                <div className={css.itemDate}>
                    <p>7:00 AM</p>
                </div>
             </div>   
            
            <div className={css.btns}>
            <button type="button" className={css.changeBtn}
            //  onClick={handleEdit}
             >
                 <Icon 
              width={14} 
              height={14} 
              iconName="edit" 
              styles={css.btnIcon} 
            />
             </button>
            <button type="button" className={css.changeBtn} 
            // onClick={handleDelete}
            >
                <Icon 
            width={14} 
            height={14} 
            iconName="trash" 
            styles={css.btnIcon} 
          />
          </button>
            
            </div>
             
           </div>
         
    )
}
           
export default WaterItem;