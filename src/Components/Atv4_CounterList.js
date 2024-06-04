import { useState } from 'react';

let initialCounters = [
    0,0,0
];

export default function CounterList() {
    const [Counters, setCounters] = useState(
        initialCounters
    );

function handleIncrementClick(index){
    const nextCounters = Counters.map((c,i) => {
        if (i === index) {
            return c + 1;
        } else {
            return c;
        }
    });
    setCounters(nextCounters);
}

return(
    <div className='container'>
        <br />
        <p><b>CounterList</b></p>
        <ul>
            {Counters.map((counter, i) => (
                <li key={i}>
                    <i>{counter}    </i>
                    <button onClick={() => {
                        handleIncrementClick(i);
                    }}>+1</button>
                </li>
            ))}
        </ul>
    </div>
);
}