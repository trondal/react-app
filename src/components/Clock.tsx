import React, { Component } from 'react';

class Clock extends Component {

    state = {
        tick: 0,
        clock: new Date().toLocaleTimeString()
    };
    timerID: any;

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.passTime(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    passTime = () => {
        let temp = Object.assign({}, this.state);
        temp.clock = new Date().toLocaleTimeString();
        this.setState(temp)
    }

    increment = () => {
        let temp = Object.assign({}, this.state);
        temp.tick += 1;
        this.setState(temp);
    };

    decrement = () => {
        let temp = Object.assign({}, this.state);
        temp.tick -= 1;
        this.setState(temp);
    }

    render() {
        return (
            <div>
                <div>{this.state.tick}</div>
                <div>{this.state.clock}</div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    };
}

export default Clock;