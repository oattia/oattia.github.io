import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import Gallery from "./components/gallery";
import Game from './containers/game';
import reducer from './reducers/index';

const store = createStore(reducer);

render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/game" component={Game} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/" component={App} />
			</Switch>
		</BrowserRouter>
	</Provider>, 
	document.getElementById('root'));
