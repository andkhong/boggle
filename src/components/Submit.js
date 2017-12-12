import React from 'react';

function Submit({submitScore}) {
    return (
        <button onClick={submitScore}>
            Submit Score
        </button>
    );
}

export default Submit;