import s from './FilterContacts.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/constactsSlice';
import { selectContactsFilter } from 'redux/contactsSelectors';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  return (
    <div className={s.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        id="filter"
        type="text"
        name="name"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        className={s.search}
      />
    </div>
  );
};

export default FilterContacts;
