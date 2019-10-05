import { combineReducers } from 'redux';
import { SectionsReducer, ActiveReducer } from './reducer_sections';
import { PlayerBoardReducer, EnemyBoardReducer } from './reducer_board';
import ActiveSection from './reducer_active_section';

const rootReducer = combineReducers({
	sections: SectionsReducer,
	activeSection: ActiveReducer,
	playerBoard: PlayerBoardReducer,
	enemyBoard: EnemyBoardReducer
});

export default rootReducer;
