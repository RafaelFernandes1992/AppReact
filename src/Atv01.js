import Relogio from './Components/Relogio';
import Letreiro from './Components/Letreiro';
import { Link } from 'react-router-dom';

export default function Atv01() {
    return(
        <>
            <h1>Atividade 01</h1>
            <br />
            <p>
                <Relogio />
            </p>


            <p>
                <Letreiro />
            </p>

                        
            <br />
            <Link to="/">Retornar à página inicial</Link>

            <p> <b>Aluno: </b>Rafael Fernandes de Melo Lopes</p>
        </>
    );
}
