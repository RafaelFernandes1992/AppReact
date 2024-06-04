import React from 'react';

 function Button({onClick,children}) {
    return(
        <button onClick={e  => {
            e.stopPropagation();
            onClick();
        }}>
            {children}        
        </button>
    );
 }
/*
function PlayButton({movieName}){

    function handlePlayClick() {
        alert('Playing ${movieName}!')
    }

    return (
        <button onClick={handlePlayClick}>
            Play "{movieName}"
        </button>
    );
    
}


function UploadButton() {
    return (
        <button onClick={() => alert('Uploading!')}>
            Upload image
        </button>
    );
}
*/


export default function Toolbar() {
    return(
        <div class="container">
            <p><b>Toolbar</b></p>
            <div className="Toolbar" onClick={() => {
                alert('You cliked on the toolbar!');
            }}>
                <Button onClick={() => alert('Playing!')}>
                    Play Movie
                </Button>

                <Button onClick={() => alert('Uploading!')}>
                    Upload Image
                </Button>
            </div>
        </div>
    );
}







    






