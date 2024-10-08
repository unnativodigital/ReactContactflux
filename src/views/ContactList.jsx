import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactCard from '../components/ContactCard';


const ContactList = () => {
  const { store } = useContext(Context);
  // console.log(store.todos);
  return (
          <div className="container">
            <div className="content contact-list">
              <div className="card card-default">
                <div className="card-header align-items-center px-3 px-md-5">
                  <h2>Contacts</h2>
                  <Link to="/addcontact">
                    <button className='btn btn-primary'>Add new contact</button>
                  </Link>
                </div>
                <div className="card-body px-3 px-md-5">
                {
                  !store.contactList || !store.contactList.length ?
                  <div>No tienes contactos agregados</div>
                  :
                  <div className="row">
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
                  </div>
                }
                </div>
              </div>
            </div>
          </div>
  );
};

export default ContactList;