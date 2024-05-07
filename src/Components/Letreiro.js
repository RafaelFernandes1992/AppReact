import React, { useState, useEffect } from 'react';

function Letreiro() {
    const mensagem = 'Venha estudar na Fatec';
    let indice = 0;
    const [Texto, setTexto] = useState(mensagem.substring(0,indice));
    
    useEffect(() => {
        const Intervalo = setInterval(() => {
            indice = indice + 1;
            setTexto(mensagem.substring(0,indice));

            if (indice === mensagem.length) {
                indice = 0;
            }

        }, 400);


        return () => {
            clearInterval(Intervalo);
        };

    }, []);

    return (
        <p> <b>Letreiro: </b> {Texto}</p>
        );
    }

export default Letreiro;
