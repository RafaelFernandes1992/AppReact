export default function ContactList({
    selectedContact,
    contacts,
    onSelect
}) {
    
    return (
        <div class="container">
            <section className='contact-list'>
                <ul>
                    {contacts.map(contact =>
                        <li key={contact.email}>
                            <button onClick={() => {
                                onSelect(contact);
                            }}>
                                {contact.name}
                            </button>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    );
}