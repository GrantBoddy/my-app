import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div className="Counter">
                <h2>Counter</h2>
                <div className="counter-display">
                    <p>Current Count: {this.state.count}</p>
                </div>
                <div className="counter-buttons">
                    <button onClick={this.decrementCount}>-</button>
                    <button onClick={this.incrementCount}>+</button>
                </div>
            </div>
        );
    }
}

export default Counter;
