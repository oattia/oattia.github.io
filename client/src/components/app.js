import React, { Component } from 'react';

import Navbar from './navbar';
import Header from "./header";
import Content from './content';

export default () => {
	return (
		<div>
			<Navbar/>
			<Header />
			<Content/>
		</div>
	);
}