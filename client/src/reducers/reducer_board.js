import * as actionType from '../actions/action_types';
import { 
	NUM_ROWS, 
	NUM_COLS,
	EMPTY,
	SHIP,
	HIT,
	MISS,
	ALL_SHIPS,
	TOTAL_HEALTH,
} from '../config/game_params';

function initState() {
	return {
		board: Array(NUM_ROWS).fill().map(() => Array(NUM_COLS).fill(EMPTY)),
		ships: [],
		shipIsVertical: true,
		health: 0,
	}
}

export function PlayerBoardReducer(state = initState(), action) {
	let nextState = JSON.parse(JSON.stringify(state));
	if (action.type === actionType.PLAYER_ROTATE_SHIP) {
		nextState.shipIsVertical = action.payload;
	} else if (action.type === actionType.PLAYER_PLACE_SHIP) {
		if (state.ships.length >= ALL_SHIPS.length) return state;
		const shipLength = ALL_SHIPS[state.ships.length];
		const { i, j } = action.payload;
		
		if (placeShip(i, j, shipLength, nextState.shipIsVertical, nextState.board)) {
			nextState.ships.push(shipLength);
			nextState.health += shipLength;
		}
	} else if (action.type === actionType.ENEMY_HIT) {
		const { i, j } = action.payload;
		if (hitBoard(i, j, nextState.board)) {
			nextState.health--;
		}
	}
	return nextState;
}

export function EnemyBoardReducer(state = initState(), action) {
	let nextState = JSON.parse(JSON.stringify(state));
	if (action.type === actionType.ENEMY_PLACE_ALL_SHIPS) {
		const result = placeAllShips(state.board, ALL_SHIPS);
		if (result.res) {
			nextState.board = result.board;
			nextState.ships = ALL_SHIPS.slice();
			nextState.health = ALL_SHIPS.reduce((a, b) => a + b);
		}
	} else if (action.type === actionType.PLAYER_HIT) {
		const {i, j} = action.payload;
		if (hitBoard(i, j, nextState.board)) {
			nextState.health--;
		}
	}
	return nextState;
}

function placeShip(i, j, shipLength, isVertical, board) {
	let dx = isVertical;
	let dy = !isVertical;

	let x = i; 
	let y = j;
	for (let k = 0; k < shipLength; ++k) {
		if (!isValid(x, y) || board[x][y] != EMPTY) return false;
		x += dx;
		y += dy;
	}

	x = i; y = j;
	for (let k = 0; k < shipLength; ++k) {
		board[x][y] = SHIP;
		x += dx;
		y += dy;
	}
	return true;
}

function removeShip(i, j, shipLength, isVertical, board) {
	let di = isVertical;
	let dj = !isVertical;

	for (let k = 0; k < shipLength; ++k) {
		board[i][j] = EMPTY;
		i += di;
		j += dj;
	}
}

function hitBoard(i, j, board) {
	if (board[i][j] === SHIP) {
		board[i][j] = HIT;
		return true;
	} else if (board[i][j] === EMPTY) {
		board[i][j] = MISS;
	}
	return false;
}

function isValid(i, j) {
	return i >= 0 && j >= 0 && i < NUM_ROWS && j < NUM_COLS;
}

function placeAllShips(board, all_ships) {
	const BLOCK = 'B';
	let result = { res: false };
	for (let k = 0; k < 50; k++) {
		let nextBoard = board.map(row => row.map(() => Math.random() < 0.5 ? EMPTY : BLOCK));
		let ships = all_ships.slice();
		if (tryPlaceAllShips(nextBoard, ships)) {
			nextBoard = nextBoard.map(row => row.map(val => val === SHIP ? SHIP: EMPTY));
			result.board = nextBoard;
			result.res = true;
			break;
		}
	}
	return result;
}

function tryPlaceAllShips(board, ships) {
	if (ships.length === 0) return true;
	const nextShips = ships.slice(1);
	const shipLength = ships[0];
	for (let i = 0; i < NUM_ROWS; ++i) {
		for (let j = 0; j < NUM_COLS; ++j) {
			let isVertical = false;
			if ((isVertical = placeShip(i, j, shipLength, true, board)) || placeShip(i, j, shipLength, false, board)) {
				if (tryPlaceAllShips(board, nextShips)) return true;
				removeShip(i, j, shipLength, isVertical, board);
			}
		}
	}
	return false;
}

