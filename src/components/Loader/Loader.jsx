import css from './Loader.module.css';
const Loader = ({addClass = ""}) => {
  return (
    <div className={[css.loader, addClass].join(' ')}></div>
  )
}

export default Loader
