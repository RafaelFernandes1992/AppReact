import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <p><b>Aluno:</b> Rafael Fernandes de Melo Lopes</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/Atv03">Atividade 3</Link>
                    </li>
                    <li>
                        <Link to="/Atv04">Atividade 4</Link>
                    </li>
                    <li>
                        <Link to="/Atv05">Atividade 5</Link>
                    </li>
                    <li>
                        <Link to="/Atv06">Atividade 6</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;