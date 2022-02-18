import React from 'react';

const Square = (props) => {
    const style = {
        background: 'lightblue',
        border: '1px solid darkgreen',
        fontSize: '60px',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
    }
    return (
        <div className='square' style={style} onClick={() => props.openCard(props.emojiCard.id, props.emojiCard.value )}>
            {props.emojiCard.isOpen ? props.emojiCard.value : null}
        </div>
    );
};
export default Square;