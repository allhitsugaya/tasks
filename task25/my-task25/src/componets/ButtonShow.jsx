import React, { Component } from 'react';
import { emjObject } from './emj.jsx';
import SeeEmj from './SeeEmj.jsx';

export class ButtonShow extends Component {
    constructor(props) {
        super(props);
        const  savedEmj = localStorage.getItem('emojis');
        const emoji = savedEmj ? JSON.parse(savedEmj) : emjObject;

        const savedWinner = localStorage.getItem('maxEmoji');
        const maxEmoji = savedWinner ? JSON.parse(savedWinner) : null;

        this.state = {
            emojis: emoji,
            maxEmoji: maxEmoji
        };
    }
    handleEmojiClick = (id) => {
        const updatedEmojis = this.state.emojis.map((emoji) => {
            if (emoji.id === id) {
                return { ...emoji, voices: emoji.voices + 1 };
            }
            return emoji;
        });
        this.setState({ emojis: updatedEmojis }, ()=>{
            localStorage.setItem('emojis', JSON.stringify(this.state.emojis));
        });
    };
    saveWinner = () =>{
        const maxEmoji= this.state.emojis.reduce((max, emoji) => emoji.voices > max.voices ? emoji:max, this.state.emojis[0]);
            this.setState({maxEmoji});
        this.setState({ maxEmoji: maxEmoji }, ()=>{
            localStorage.setItem('maxEmoji', JSON.stringify(maxEmoji));
        });
    };
    handleClearStorage = () => {
        localStorage.clear();
    };




    render() {
        return (
            <>
                <div className="container">
                    {this.state.emojis.map((item) => (
                        <SeeEmj
                            key={item.id}
                            emoji={item.emoji}
                            voices={item.voices}
                            onClick={() => this.handleEmojiClick(item.id)}
                        />
                    ))}
                </div>
                <button className="btn-show" onClick={this.saveWinner}>Show winner</button>
                {this.state.maxEmoji ? <h2 className="winner">The winner is:{this.state.maxEmoji.emoji}</h2> :
                    <h2>No winner yet</h2>}
                <button onClick={this.handleClearStorage} className="btn-show">ClearAll</button>
            </>
        );
    }
}
export default ButtonShow;