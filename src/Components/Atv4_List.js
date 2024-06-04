import { useState } from 'react';

let nextId = 0;

 
export default function List() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return(
        <div class="container">
            <br></br>
            <p><b>List</b></p>
            <p>Inspiring sculptors:</p>

            <input 
            value = {name}
            onChange={e => setName(e.target.value)}
            />

            <button onClick={() => {
                setArtists([
                    ...artists,
                    {id: nextId++, name: name}]);
            }}>Add</button>
            <ul>
                {artists.map(artists => (
                    <li key={artists.id}>{artists.name}</li>)
                )}
            </ul>
        </div>
    );
}