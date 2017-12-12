import React from 'react';
import classNames from 'classnames';

function Dice({index, selectLetter, dice}) {
    return (
        <div 
            key={index[1]}
            className={classNames('dice', { 'selected': dice.selected })}
            onClick={selectLetter.bind(this, index)}>
            {dice.letter !== 'Q' ? dice.letter : 'Qu'}
        </div>
    );
}

export default Dice;