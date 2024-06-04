import { useState } from 'react';

 
export default function Form() {
    const [isSent, setIsSent] = useState(false);
    const [to, setTo] = useState ('Alice');
    const [message, setMessage] = useState('Hello!');

    if (isSent) {
        return(
            <div class="container">
            <br></br>
            <p><b>Form</b></p>
            <h1>Your message is on its way!</h1>
            </div>
        );
    }
    /*
    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert('You said ${message} to ${to}');
        }, 50);
    }
    */
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <div class="container">
            <br></br>
            <p><b>Form</b></p>
            <label>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}>
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <br></br>
            <p></p>
                <textarea 
                    placeholder='Message'
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <br></br>
                <button type='submit'>Send</button>
            </div>
        </form>
    );
}


function sendMessage(message){
    //...
}