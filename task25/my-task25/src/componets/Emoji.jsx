import React, { Component } from 'react';

class Emoji extends Component {
    render() {
        const { emoji, voices, onClick } = this.props;

        return (
            <div>
                <ul>
                    <li className="emj" onClick={onClick} style={{ listStyleType: 'none' }}>{emoji}</li>
                    <li className="voices" style={{ listStyleType: 'none' }}>{voices || "No voices"}</li>
                </ul>
            </div>
        );
    }
}

export default Emoji;
