import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';

const WaterList = () => {
    return (
        <div>
            <ul className={css.waterList}>
                <li>
                <WaterItem />
                </li>
                <li>
                <WaterItem />
                </li>
{/* items.map(item => (
    <li className={css.waterItem} key={item.id}>
        <WaterItem item={item} />
        </li>
)) */}
            </ul>
        </div>
    )
                

}

export default WaterList;