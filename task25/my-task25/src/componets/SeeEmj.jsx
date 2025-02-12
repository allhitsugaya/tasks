import React, { Component } from 'react';

class SeeEmj extends Component {
    render() {
        const { emoji, voices, onClick } = this.props;

        return (
            <div>
                <h2 className="emj" onClick={onClick}>{emoji}</h2>
                <h2 className="voices">{voices || "No voices"}</h2>
            </div>
        );
    }
}

export default SeeEmj;
