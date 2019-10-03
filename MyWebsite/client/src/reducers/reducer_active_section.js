import { SELECT_SECTION } from '../actions/action_types';

export default function (state = null, action) {
	if (action.type === SELECT_SECTION) {
		return action.payload;
	}
	return state;
}
