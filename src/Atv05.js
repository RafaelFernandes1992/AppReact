import { Link } from 'react-router-dom';
import FormQuiz from './Components/Atv5_FormQuiz';
import FormTicket from './Components/Atv5_FormTicket';
import Accordion from './Components/Atv5_Accordion';
import Messenger from './Components/Atv5_App';

export default function Atv05() {
    return(
        <>
            <h1>Atividade 05</h1>
            <br />
            <p>
                <FormQuiz />
                <FormTicket />
                <Accordion />
                <Messenger />
                
            </p>
            <br />
            <Link to="/">Retornar à página inicial</Link>
            <br />
            <br />
            <p> <b>Aluno: </b>Rafael Fernandes de Melo Lopes</p>
        </>
    );
}

