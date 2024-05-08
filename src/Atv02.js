import Contador from './Components/Contador';
import { Link } from 'react-router-dom';

export default function Atv02() {
    return(
        <>
            <h1>Atividade 02</h1>
            <br />
            <p>
                <Contador />
            </p>

            <br />
            <Link to="/">Retornar à página inicial</Link>
            <br />
            <br />
            <p> <b>Aluno: </b>Rafael Fernandes de Melo Lopes</p>
        </>
    );
}
