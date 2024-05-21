import { Link } from 'react-router-dom';
import { Profile } from './Components/Gallery';
import Gallery from './Components/Gallery';
import Avatar from './Components/Avatar';
import TodoList from './Components/TodoList';
import List from "./Components/List";
import PackingList from "./Components/PackingList";
import Recipe from "./Components/Recipe";
import TeaGathering from "./Components/TeaGathering";



export default function Atv03() {
    return(
        <>
            <h1>Atividade 03</h1>
            <br />
            <p>
                <Profile />
                <Gallery />
                <Avatar />
                <TodoList />
                <List />
                <PackingList />
                <Recipe />
                <TeaGathering />
            </p>
            <br />
            <Link to="/">Retornar à página inicial</Link>
            <br />
            <br />
            <p> <b>Aluno: </b>Rafael Fernandes de Melo Lopes</p>
        </>
    );
}

