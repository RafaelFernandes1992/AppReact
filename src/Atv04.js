import { Link } from 'react-router-dom';
import Toolbar from "./Components/Atv4_Toolbar";
import Gallery from './Components/Atv4_Gallery';
import Counter from './Components/Atv4_Counter';
import Form from './Components/Atv4_Form';
import MovingDot from './Components/Atv4_MovingDot';
import Form3 from './Components/Atv4_Form3';
import Form2 from './Components/Atv4_Form2';
import List from './Components/Atv4_List';
import List2 from './Components/Atv4_List2';
import ShapeEditor from './Components/Atv4_ShapeEditor';
import CounterList from './Components/Atv4_CounterList';
import List3 from './Components/Atv4_List3';
import List4 from './Components/Atv4_List4';
import BucketList from './Components/Atv4_BucketList';

export default function Atv04() {
    return(
        <>
            <h1>Atividade 04</h1>
            <br />
            <p>
                <Toolbar />
                <Gallery />
                <Counter />
                <Form />
                <MovingDot />
                <Form2 />
                <Form3 />
                <List />
                <List2 />
                <ShapeEditor />
                <CounterList />
                <List3 />
                <List4 />
                <BucketList/>
            </p>
            <br />
            <Link to="/">Retornar à página inicial</Link>
            <br />
            <br />
            <p> <b>Aluno: </b>Rafael Fernandes de Melo Lopes</p>
        </>
    );
}



