import { useState } from 'react';

const initialList = [
    { id: 0, title: 'Joel'},
    { id: 1, title: 'Maurilio'},
    { id: 2, title: 'Florisvaldo'},
]
 
export default function List4() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return(
        <div className="container">
            <br></br>
            <p><b>List4</b></p>

            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                  <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </div>
    );
}