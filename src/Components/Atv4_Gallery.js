import { useState } from 'react';
import { sculptureList } from './Atv4_data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    
    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick () {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];

    return(
        <div class="container">
            <br></br>
            <p><b>Gallery</b></p>            
            <button onClick={handleNextClick}>
                Next
            </button>
            <p></p>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
            <p>
                <b>{sculpture.name} by {sculpture.artist}</b>
                <br />
                ({index + 1} of {sculptureList.length})
            </p>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
                {showMore && <p>{sculpture.description}</p>}
        </div>
    );
}