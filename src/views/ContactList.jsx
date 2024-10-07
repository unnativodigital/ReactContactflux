import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactCard from '../components/ContactCard';


const ContactList = () => {
  const { store } = useContext(Context);
  // console.log(store.todos);
  return (
    <div className="container ">
      <div className="d-flex justify-content-end py-4">
        <Link to="/addcontact">
          <button className='btn btn-success'>Add new contact</button>
        </Link>
      </div>
      {
        !store.contactList || !store.contactList.length ?
        <div>No tienes contactos agregados</div>
        :
      <ul className="list-group col-12">
        {
          store.contactList.map((contact) => {
            return (
              <ContactCard
                key={contact.id}
                contact={contact}
              />
            )
          })
        }
      </ul>
      }
    </div>
  );
};

export default ContactList;