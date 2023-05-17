import { useSelector } from 'react-redux';
import s from './Loader.module.css';

const Loader = ({ children }) => {
  const isLoading = useSelector(state => state.contacts.isLoading);

  return (
    <>
      {isLoading && (
        <div className={s.ldsRoller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {children}
    </>
  );
};

export default Loader;
