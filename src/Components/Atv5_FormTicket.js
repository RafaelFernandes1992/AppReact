import { useState } from 'react';

 
export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    //const [fullName, setFullName] = useState('');
    const fullName = firstName + ' ' + lastName;

    /*
    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        setFullName(e.target.value + ' ' + lastName);
    }
    */

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);    
    }

    return (
        <div class="container">
            <br></br>
            <h1><b>FormTicket</b></h1>
            <p>Let's check you in</p>
            <label>
                First name: {' '}
                <input 
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name: {' '}
                <input 
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Your tickt will be issued to: <b>{fullName}</b>
            </p>

        </div>
    );
}