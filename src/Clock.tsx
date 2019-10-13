import React, { Component } from "react";

import ClockProps from "./ClockProps";
import ClockState from "./ClockState";

class Clock extends Component<ClockProps, ClockState> {
    constructor(props: ClockProps) {
        super(props);

        this.state = {
            currentDate: new Date()
        };

        this.timerId = 0;
    }

    timerId :number;

    componentDidMount() {
        this.timerId = window.setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            currentDate: new Date()
        });
    }

    render() {
        return (
            <div className="clock">
                It's {this.state.currentDate.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;