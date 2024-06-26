import { useState } from 'react';

 
export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <p>That's right!</p>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return(
        <div class="container">
            <br></br>
            <h1><b>FormQuiz</b></h1>
            <p>City quiz</p>
            <p>In which city is there a billboard that turns 
                air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'}
                />
                <br />
                <button disabled={answer.length === 0 || 
                status === 'submitting'
                }>   
                Submit
            </button>
            {error !== null && 
                <p className="Error">
                   {error.message}
                </p>
            }
            </form>
        </div>
    );
}
function submitForm(answer){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima'
            if (shouldError) {
                reject (new Error ('Try again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

