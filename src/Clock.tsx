import * as React from 'react';
import { setState } from 'react';
class Clock extends React.Component {
  timerID: number | undefined;
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.testClick = this.testClick.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  testClick(e) {
    console.log(e);
  }
  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <h3 onClick={this.testClick}>点击一下</h3>
      </div>
    );
  }
}

export default Clock;