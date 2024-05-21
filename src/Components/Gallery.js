import React from 'react';

export function Profile() {

    return (
        <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
        width={150}
        height={180}
        />
    )
}

function Props({person, size}){

}

export default function Gallery() {

    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
            <Props 
                person={{name:'Lin Lanying', imageId:'https://i.imgur.com/1bX5QH6.jpg'}}
                size={100}
            />
        </section>
    )
}

