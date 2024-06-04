import { useState } from 'react';

let initialShapes = [
    { id: 0, type: 'circle', x:50, y: 45},
    { id: 1, type: 'square', x:150, y: 30},
    { id: 2, type: 'circle', x:250, y: 15},
];
 
export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                //no change
                return shape;
            } else {
                //retorna um novo circulo 50px
                return{
                    ...shape, 
                    y: shape.y + 150,
                }
            };
        });

        setShapes(nextShapes);
    }

    return(
        <div className="container">     
        <br></br>     
        <p><b>ShapeEditor</b></p>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div 
                    key={shape.id}
                    style={{
                        background: 'purple',
                        //position: 'absolute',
                        position: 'relative',
                        left: shape.x,
                        top: shape.y,
                        borderRadius: 
                        shape.type === 'circle' ? '50%' : '',
                        width: 15,
                        height: 15,  
                    }} />
            ))}
            <br />
        </div>
    );
}