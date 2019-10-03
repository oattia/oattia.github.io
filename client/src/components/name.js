import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

const toCSS = (rotateX) => ({ transform: `rotateX(${rotateX}deg)` });

class Name extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cn_name: 'Chufeng Hu',
			eng_name: 'Chester',
			isEng: false
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => this.tick(), 3000);	
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	tick() {
		this.setState({
			isEng: !this.state.isEng
		});
	}

	render() {
		return (
			<div key={this.state.isEng}>
				<Motion 
					defaultStyle={{ rotateX: 220 }}
					style={{ rotateX: spring(0)}}>
					{style =>
						<div 
							className='name'
							style={toCSS(style.rotateX)}
						>
							{this.state.isEng ? this.state.eng_name : this.state.cn_name}
						</div>
					}
				</Motion>
			</div>
		);
	}
}

export default Name;
