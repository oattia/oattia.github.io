import * as actionType from './action_types';
import * as gameParams from '../config/game_params';

export function selectSection(section) {
	return ({
		type: actionType.SELECT_SECTION,
		payload: section
	});
}

export function enemyPlaceAllShips() {
	return ({
		type: actionType.ENEMY_PLACE_ALL_SHIPS
	});
}

export function playerPlaceShip(i, j) {
	return ({
		type: actionType.PLAYER_PLACE_SHIP,
		payload: { i, j }
	});
}

export function playerRotateShip(isVertical) {
	return ({
		type: actionType.PLAYER_ROTATE_SHIP,
		payload: isVertical
	});
}

export function playerHit(i, j) {
	return ({
		type: actionType.PLAYER_HIT,
		payload: { i, j }
	});
}

export function enemyHit(i, j) {
	return ({
		type: actionType.ENEMY_HIT,
		payload: { i, j }
	})
}
