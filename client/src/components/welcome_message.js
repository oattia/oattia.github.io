import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WelcomeMessage extends Component {
	constructor(props) {
		super(props)
	
		let todayTime = this.getTodayTime();
		this.state = {
			messages: [
				"Hello, World!", 
				"Welcome to my website",
				"Greetings",
				"Glad you're here!",
				`Good ${todayTime}!` 
			],
			current_msg: '',
			current_msg_idx: 0,
			current_char_idx: 0
		};
	}

	componentDidMount() {
		this.timer = setInterval(
			() => this.tick(), 
			150
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick() {
		let msg = this.state.current_msg;
		let msg_idx = this.state.current_msg_idx;
		let char_idx = this.state.current_char_idx;

		char_idx += 1;
		msg = this.state.messages[msg_idx].substring(0, char_idx);
		if (char_idx == this.state.messages[msg_idx].length) {
			char_idx = -1;
			msg_idx += 1;
		}

		if (msg_idx == this.state.messages.length) {
			clearInterval(this.timer);
			this.setState({current_msg: this.state.messages[msg_idx - 1]});
		} else {
			this.setState({
				current_msg: msg,
				current_msg_idx: msg_idx,
				current_char_idx: char_idx
			});
		}
	}

	getTodayTime() {
		let todayHr = (new Date()).getHours();
		let time;
		if (todayHr < 12)
			time = "morning";
		else if (todayHr < 18)
			time = "afternoon";
		else
			time = "evening";

		return time;
	}

	render() {
		return (
			<Link to="/game">
				<div class='welcome'>
					{this.state.current_msg}
				</div>	
			</Link>
		);
	}

}

export default WelcomeMessage;
