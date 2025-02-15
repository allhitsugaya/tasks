import React, { useState } from 'react';

export const  ButtonGroup =({ saveWinner, clearAll, winner })=> {
    const [showWinner , setShowWinner] = useState(false);
     const handleClick = () => {
       setShowWinner( true);
        saveWinner();
    }
    const handleClear = () => {
        setShowWinner( false);
        clearAll();
        localStorage.clear();
    }
        return (
            <div>
                <button className="btn-show" onClick={handleClick}>Show winner</button>
                {showWinner && winner ? <h2 className="winner" style={{ display: 'block' }}>The winner is: {winner.emoji}</h2> : <h2>No winner yet</h2>}
                <button onClick={handleClear} className="btn-show">ClearAll</button>
            </div>
        );
}

export default ButtonGroup;
