import { useState } from 'react';

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade'},
    { id: 1, name: 'Lamidi Olonade Fakeyw'},
    { id: 2, name: 'Louise Nevelson'}
]
 
export default function List2() {
    const [artists, setArtists] = useState(initialArtists);

    return(
        <div class="container">
            <br></br>
            <p><b>List2</b></p>
            <p>Inspiring sculptors:</p>

            <ul>
                {artists.map(artist => (
                    
                    <li key={artist.id}>{artist.name}{' '}
                    <button onClick={() => {
                        setArtists(
                            artists.filter(a => a.id !== artist.id)
                        );
                    }}>
                        Delete
                    </button>
                    
                    </li>
                ))}
            </ul>
        </div>
    );
}