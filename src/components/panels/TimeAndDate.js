import React, { Component } from 'react'

class TimeAndDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
        this.style = {
            top: '3vh',
            left: '3vw',
            maxWidth: '30vw',
            maxHeight: '30vh',
            padding: '0 15px 30px 15px',
            fontSize: '1.8rem',
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
            <div style={this.style} className='time-date-panel panel'>
                <h1>{('0' + this.state.date.getHours()).slice(-2)}:{('0' + this.state.date.getMinutes()).slice(-2)}
                {this.props.settings.showSeconds && <span style={{fontSize: '0.5em'}}>:{('0' + this.state.date.getSeconds()).slice(-2)}</span>}
                </h1>
                <div>{this.props.settings.showYear ? this.state.date.toLocaleDateString() 
                : this.state.date.toLocaleDateString().slice(-8)}<br/>{this.state.day[this.state.date.getDay()]}</div>
            </div>
        )
    }
}
export default TimeAndDate;