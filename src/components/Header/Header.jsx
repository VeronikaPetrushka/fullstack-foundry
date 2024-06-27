import s from './Header.module.css'

const Header = ({title, className, ...props}) => {
  return (
    <h2 className={`${s.title}${className ? className : ''}`} {...props}>
        {title}
    </h2>
  )
}

export default Header