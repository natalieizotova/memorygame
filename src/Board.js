import React from 'react';
import Square from "./Square";
import './App.css';

const Board = (props) => {
    const style = {
        border: '2px solid darkgreen',
        width: '500px',
        height: '400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(4, 1fr)'
    }

    return (
        <div style={style} className='board'>
            {props.field.map(el => <Square emojiCard={el} key={el.id} openCard={props.openCard}/>)}
        </div>
    );
};
export default Board;