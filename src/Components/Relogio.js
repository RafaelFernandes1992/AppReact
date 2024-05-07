import React from 'react';
import { useState, useEffect } from 'react';


function Relogio() {
    let diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]; // vetor onde informo os nomes dos dias da semana (sendo o indice 0 domingo... e 6 sábado)
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]; // vetor onde informo o nome dos meses (sendo 0 Jan e 11 Dez)
    let data = new Date(); // instacio o Date para obter a data padrão
    let diaSemana = data.getDay(); // Obtém o dia da semana (0-6)
    let diaMes = data.getDate(); // Obtém o dia do mês (1-31)
    let mes = data.getMonth(); // Obtém o mês (0-11)
    let ano = data.getFullYear(); // Obtém o ano (ex: 2023)
    let dataFormatada = diasSemana[diaSemana] + ", " + diaMes + " de " + meses[mes] + " de " + ano;

    const [HoraAgora, setHoraAgora] = useState(new Date());

    useEffect(
        () => {
            const Intervalo = setInterval(() => {
                setHoraAgora(new Date())
            }, 1000);

            return () => {
            clearInterval(Intervalo);
            };
        }, []
    );

    return <p> <b>Hora e data: </b> {HoraAgora.toLocaleTimeString()}, {dataFormatada}</p>
}

export default Relogio;




