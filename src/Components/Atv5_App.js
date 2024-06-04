import { useState } from 'react';
import Chat from './Atv5_Chat';
import ContactList from './Atv5_ContactList';
 
export default function Messenger() {
    const [to, setTo] = useState(contacts[0]);

    return (
        <div class="container">
            <br></br>
            <h1><b>Messenger</b></h1>
            <>
              <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
              />
              <Chat key={to.email} contact={to} />
            </>
        </div>
    );
}

const contacts = [
  {name: 'Taylor', email: 'taylor@mail.com'},
  {name: 'Alice', email: 'alice@mail.com'},
  {name: 'Bob', email: 'bob@mail.com'}
];