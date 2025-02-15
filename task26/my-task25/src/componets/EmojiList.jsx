import React, {useState} from 'react';
import { emjObject } from "./data.js";
import Emoji from './Emoji.jsx';
import { LocalStorage } from "./LocalStorage.js";
import ButtonGroup from "./ButtonGroup.jsx";

export  const EmojiList  = () =>{
        const [data, setData] = useState(JSON.parse(localStorage.getItem('emojis')) || emjObject);
        const [winner, setWinner] = useState(JSON.parse(localStorage.getItem('winner')) || null);

     const handleEmojiClick = (id) => {
        setData((prevData) => {
            const updatedEmojis = prevData.map((emoji) =>
                emoji.id === id ? { ...emoji, voices: emoji.voices + 1 } : emoji
            );
            localStorage.setItem('emojis', JSON.stringify(updatedEmojis));
            console.log('Data tyt ->', updatedEmojis);
            return updatedEmojis;
        });
    };

    const saveWinner = () => {
        if (data.length === 0) return;
        const winner = data.reduce((max, emoji) => emoji.voices > max.voices ? emoji : max);
            setWinner(winner);
            localStorage.setItem('winner', JSON.stringify(winner));
    };

    const clearAll = () => {
        localStorage.removeItem('emojis');
        localStorage.removeItem('winner');
        localStorage.clear();
       setData([...emjObject]);
       setWinner(null);
    }

        return (
            <>
                <div className="container">
                    {data.map((item) => (
                        <Emoji
                            key={item.id}
                            emoji={item.emoji}
                            voices={item.voices}
                            onClick={() => handleEmojiClick(item.id)}
                        />
                    ))}
                </div>
                <ButtonGroup
                    winner={winner}
                    saveWinner={saveWinner}
                    clearAll={clearAll}
                />
            </>
        );
}

export default EmojiList;
