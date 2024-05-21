import React from 'react';

export default function TodoList() {
    const name = 'Gregorio Y. Zara';
    const today = new Date();
    const person = {
        name: 'Brasil',
        theme: {
            backgroundColor: 'green',
            color: 'yellow'
        }
    }

    function formatDate(date){
        return new Intl.DateTimeFormat(
            'pt-BR',
            {weekday: 'long'}
        ).format(date);
    }
    return ( 
        <>
            <h1>{name}'s To Do List</h1>
            <br></br>
            <h2>To Do List for {formatDate(today)}</h2>
            <ul 
                //propriedades inline: <ul style="background-color: black">
                style={
                    {
                        background: 'black',
                        color: 'red'
                    }
                }>
                <li>Linha 1</li>
                <li>Linha 2</li>
                <li>Linha 3</li>
            </ul>
            <div style={person.theme}>
                <h1>{person.name}</h1>
                <img
                className="avatar"
                src="https://i.imgur.com/wNto1Nxb.jpg"
                alt="Gregorio Y. Zara"
                width={150}
                height={150}
                />
                <p>.......................................................</p>
                <ul>
                    <li>1958 - Suécia</li>
                    <li>1962 - Chile</li>
                    <li>1970 - México</li>
                    <li>1994 - Estados Unidos</li>
                    <li>2002 - Coreia do Sul e Japão</li>
                </ul>
                <p>.......................................................</p>
                <br></br>
            </div>
            
        </>
    );
}

