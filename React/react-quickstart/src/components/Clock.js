import React, { Component } from 'react';

export default class Clock extends Component {

  constructor(props) {
  	super(props);
  	this.state = {date: new Date()};
  }

  //lifecycle callback: component was rendered
  componentDidMount() {
  	this.timerID = setInterval(()=>this.tick(), 1000);
  }

  componentWillUnmount() {
  	clearInterval(this.timerID);
  }

  tick() {
  	this.setState({
  		date: new Date()
  	});
  }

  render() {
  	return (
  		<div>
  			<h2>Current Time: {this.state.date.toLocaleTimeString()}</h2>
  		</div>
  	);
  }
}