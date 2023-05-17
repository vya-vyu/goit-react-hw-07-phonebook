import s from './ContactsList.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/constactsSlice';
import { selectFilteredContacts } from 'redux/contactsSelectors';
import { getContacts } from 'redux/contactsOperation';
import { useEffect } from 'react';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <div className={s.item}>
                {' '}
                <span>
                  {name}: {phone}
                </span>
                <button
                  id={id}
                  type="button"
                  className={s.btn}
                  onClick={e => {
                    dispatch(deleteContact(e.target.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactsList;
