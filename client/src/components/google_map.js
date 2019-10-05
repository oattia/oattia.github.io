import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: 43.472712,
				lng:  -80.542039,
			}
		});
	}

	render() {
		return (
			<div ref='map' style={{width:500, height:300}}/>
		);
	}
}

export default GoogleMap;
