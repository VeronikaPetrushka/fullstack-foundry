import Logo from '../Logo/Logo';
import css from './Page.module.css';

const Page = ({ children }) => {
  return (
    <div className={css.page}>
      <Logo />
      {children}
    </div>
  );
};
export default Page;
