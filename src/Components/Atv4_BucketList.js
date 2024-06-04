import { useState } from 'react';

let nextId = 3;

const initialList = [
    { id: 0, title: 'Marta', seen: false},
    { id: 1, title: 'Lamidi', seen: false},
    { id: 2, title: 'Louise', seen: true},
]
 
export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const [yourList, setYourList] = useState(
        initialList
    )

    function handleToggleMyList(artworkId, nextSeen) {
        setMyList(myList.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, seen: nextSeen};
            } else {
                return artwork;
            }
        }));
    }

    function handleToggleYourList(artworkId, nextSeen) {
        setYourList(yourList.map(artwork => {
            if (artwork.id === artworkId) {
                return { ...artwork, seen: nextSeen};
            } else {
                return artwork
            }
        }));
    }

    return (
        <div className="container">
        <br></br>
        <p><b>BucketList</b></p>
    
        <p>Art Bucket List</p>
        <ItemList
            artworks={myList}
            onToggle={handleToggleMyList} />
        <p>My list of art to see:</p>
        <ItemList
            artworks={yourList}
            onToggle={handleToggleYourList} />
    
    </div>  
    );

    function ItemList({artworks, onToggle}) {
        return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input
                            type='checkbox'
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
        );
    }

}