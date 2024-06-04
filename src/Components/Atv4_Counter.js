import { useState } from 'react';

 
export default function Counter() {
    const [number, setNumber] = useState(0);

    return(
        <div class="container">
            <br></br>
            <p><b>Counter</b></p>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 3);
                setTimeout(() => {
                    alert(number);
                }, 30);
            }}> +3</button>
        </div>
    );
}