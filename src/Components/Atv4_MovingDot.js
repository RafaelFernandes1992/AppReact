import { useState } from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    return(
        <div className="container">
            <br></br>
            <p><b>MovingDot</b></p>
            
            <div 
/*
                onPointerMove={e => {
                                    
                    position.x = e.clientX;
                    position.y = e.clientY;

                }}
*/
                onPointerMove={e => {
                    setPosition({
                        x : e.clientX,
                        y : e.clientY
                   })
                        
                }}
                style={{
                    position: 'relative',
                    width: '70vw',
                    height: '70vh',
                    border: 'dotted',
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
            </div>
        </div>
    );
}