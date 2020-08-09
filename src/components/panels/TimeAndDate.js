import React, { Component } from 'react'

class TimeAndDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()});
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        return (
            <div>
                <h1>{('0' + this.state.date.getHours()).slice(-2)}:{('0' + this.state.date.getMinutes()).slice(-2)}
                {this.props.settings.showSeconds && <span style={{fontSize: '0.6em'}}>:{('0' + this.state.date.getSeconds()).slice(-2)}</span>}
                </h1>
                <h2>{this.state.date.toLocaleDateString()}</h2>
            </div>
        )
    }
}
export default TimeAndDate;