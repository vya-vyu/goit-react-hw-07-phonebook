import s from './ContactsList.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilteredContacts } from 'redux/contactsSelectors';
import { getContacts, deleteContact } from 'redux/contactsOperation';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <Loader>
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
      </Loader>
    </>
  );
};

export default ContactsList;
