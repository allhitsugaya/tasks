import React, { Component } from 'react';
import { emjObject } from "./data.js";
import Emoji from './Emoji.jsx';
import { LocalStorage } from "./LocalStorage.js";
import ButtonGroup from "./ButtonGroup.jsx";

export class EmojiList extends Component {
    constructor(props) {
        super(props);
        const data = JSON.parse(localStorage.getItem('emojis')) || emjObject;
        const winner = JSON.parse(localStorage.getItem('winner')) || null;

        this.state = {
            data: data,
            winner: winner
        };
    }

    handleEmojiClick = (id) => {
        this.setState((prevState) => {
            const updatedEmojis = prevState.data.map((emoji) =>
                emoji.id === id ? { ...emoji, voices: emoji.voices + 1 } : emoji
            );
            localStorage.setItem('emojis', JSON.stringify(updatedEmojis));
            console.log('Data tyt ->', updatedEmojis);
            return {
                ...prevState,
                data: updatedEmojis
            };
        }, () => {
        });
    };

    saveWinner = () => {
        if (this.state.data.length === 0) return;
        const winner = this.state.data.reduce((max, emoji) => emoji.voices > max.voices ? emoji : max);
        this.setState({ winner: winner }, () => {
            localStorage.setItem('winner', JSON.stringify(winner));
        });
    };

    clearAll = () => {
        LocalStorage.clearLocalStorage();
        localStorage.removeItem('emojis');
        localStorage.removeItem('winner');
        localStorage.clear();
        this.setState({
            data: [...emjObject],
            winner: null
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    {this.state.data.map((item) => (
                        <Emoji
                            key={item.id}
                            emoji={item.emoji}
                            voices={item.voices}
                            onClick={() => this.handleEmojiClick(item.id)}
                        />
                    ))}
                </div>
                <ButtonGroup
                    winner={this.state.winner}
                    saveWinner={this.saveWinner}
                    clearAll={this.clearAll}
                />
            </>
        );
    }
}

export default EmojiList;
