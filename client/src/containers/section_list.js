import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu } from 'semantic-ui-react';

import Name from '../components/name';
import WelcomeMessage from '../components/welcome_message';
import { selectSection } from '../actions/index';

class SectionList extends Component {
	renderList() {
		return this.props.sections.map(section => {
			return (
				<Menu.Item 
					name={section.name}
					active={this.props.activeSection.name === section.name}
					onClick={() => this.props.selectSection(section)}>
				</Menu.Item>
			);
		});
	}

	render() {
		return (
			<div>
				<Menu 
					fluid
					secondary
					pointing
					widths={6}>
					<Menu.Item header> <Name /></Menu.Item>
					{this.renderList()}
					<Menu.Item><WelcomeMessage /></Menu.Item>
				</Menu>
			</div>
		);
	}
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectSection: selectSection }, dispatch);
}

function mapStateToProps(state) {
	return ({
		sections: state.sections,
		activeSection: state.activeSection
	});
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);
