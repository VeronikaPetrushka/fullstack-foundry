
import css from './WaterItem.module.css';


const WaterItem = () => {
    // const { id, date, volume } = item;
    return (
           <div>
            <div className={css.item}>
            <div className={css.itemVolume}>
                    <p>250 ml</p>
                </div>
                <div className={css.itemDate}>
                    <p>7:00 AM</p>
                </div>
                
            
            <button type="button" className={css.deleteBtn} 
            // onClick={() => deleteWater(id)}
            >Delete</button>
            <button type="button" className={css.editBtn}
            //  onClick={() => editWater(id)}
             >Edit</button>
             </div>
           </div>
         
    )
}
           
export default WaterItem;