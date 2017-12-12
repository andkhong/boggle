import React from 'react';
import Dice from './Dice';

function Board({dices, selectLetter}){
    return (
        <div className='board'>
            {dices.map((row, rIndex) => (
                <div key={rIndex} className='row'>
                    {row.map((dice, index) =>
                        <Dice
                            index={[rIndex, index]}
                            dice={dice}
                            selectLetter={selectLetter}
                        />
                    )}
                </div>        
            ))}
        </div>
    );
}

Board.defaultProps = {
    dices: []
};

export default Board;
