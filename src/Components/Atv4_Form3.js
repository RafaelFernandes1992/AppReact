import { useState } from 'react';

 
export default function Form3() {
    const [person,setPerson] = useState({
        name:'Niki de Saint Phalle',
        artwork: {
            tittle: 'Blue Nana',
            city: 'Hamburge',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person, 
            artwork: {
                ...person.artwork,
                tittle: e.target.value
            }
        });
    }

    function handleCityChange(e) {
        setPerson ({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e){
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        })
    }

    return (
        <>
         <div class="container">
            <br/>
            <p><b>Form3</b></p>
            <label>
                Name:
                    <input
                     value={person.name}
                     onChange = {handleNameChange}
                    />
            </label>
            <br/>
            <label>
                Tittle:
                    <input
                     value={person.artwork.tittle}
                     onChange = {handleTitleChange}
                    />
            </label>
            <br/>
            <label>
                City:
                    <input
                     value={person.artwork.city}
                     onChange = {handleCityChange}
                    />
            </label>
            <br/>
            <label>
                Image:
                    <input
                     value={person.artwork.image}
                     onChange = {handleImageChange}
                    />
            </label>
            <p></p>
            <p>
                <i>{person.artwork.tittle}</i>
                {' by '}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
                <img 
                src={person.artwork.image}
                alt={person.artwork.tittle}
                />
        </div>
        </>
    );
}