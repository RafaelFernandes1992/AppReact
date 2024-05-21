import React from 'react';

/*
export default function Avatar() {

    return (
        <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
        />
    )
}
*/

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
    const description = 'Gregorio Y. Zara'
    return ( 
        <>
        <h1>Gregorio Y. Zara</h1>
        <img
            className="avatar"
            src={avatar}
            alt={description}
            width={150}
            height={150}
        />
        </>
    )
}

