import React from 'react';

function List({list, score}){
    const mappedList = Object.keys(list);
    return (
        <table className='list'>
            <tr>
                <td> Word </td>
                <td> Score </td>
            </tr>
            {mappedList.map(item =>
                <tr>
                    <td>{item}</td>
                    <td>{list[item]}</td>
                </tr>
            )}
            <tr className='score'> 
                <td> Total: </td>
                <td> {score} </td>
            </tr>
        </table>
    );
}

export default List;