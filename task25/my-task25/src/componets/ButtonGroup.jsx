import React, { Component } from 'react';

export class ButtonGroup extends Component {
    state = {
        showWinner: false,
    }
    handleClick = () => {
        this.setState({showWinner: true});
        this.props.saveWinner();
    }
    handleClear = () => {
        this.setState({showWinner: false});
        this.props.clearAll();
        localStorage.clear();
    }
    render() {
        const {winner} = this.props;
        const { showWinner } = this.state;
        return (
            <div>
                <button className="btn-show" onClick={this.handleClick}>Show winner</button>
                {showWinner && winner ? <h2 className="winner" style={{ display: 'block' }}>The winner is: {winner.emoji}</h2> : <h2>No winner yet</h2>}
                <button onClick={this.handleClear} className="btn-show">ClearAll</button>
            </div>
        );
    }
}

export default ButtonGroup;
