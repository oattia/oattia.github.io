import { SELECT_SECTION } from '../actions/action_types';
import { home, projects, teaching, contact } from '../data/contents';

function SectionsReducer(){
	return [
		home, 
		projects,
		teaching,
		contact
	]
}

function ActiveReducer(state = home, action) {
	if (action.type === SELECT_SECTION) {
		return action.payload;
	}
	return state;
}

export { SectionsReducer, ActiveReducer };

