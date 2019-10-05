import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Divider, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Square from '../components/square';
import { SHIP, ALL_SHIPS, NUM_ROWS, NUM_COLS, VERTICAL, HORIZONTAL } from '../config/game_params';

import { 
	playerPlaceShip, 
	playerRotateShip, 
	playerHit,
	enemyHit,
	enemyPlaceAllShips,
} from '../actions/index';

class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			gameStart: false,
			enemy: {
				hitCandidates: [...Array(NUM_ROWS * NUM_COLS).keys()].map(idx => [Math.floor(idx / NUM_ROWS), idx % NUM_ROWS]),
			}
		}
	}

	renderBoard(board, isPlayerBoard = true) {
		return board.map((row, rowIndex) => {
			return (
				<div className="board-row">
					{row.map((value, colIndex) => 
						<Square 
							value={value == SHIP && !isPlayerBoard ? " " : value}
							onClick={this.handleClick(rowIndex, colIndex, isPlayerBoard)}/>)}
				</div>
			);
		});
	}

	handleClick(i, j, isPlayerBoard) {
		let length = this.props.playerBoard.ships.length;
		let { playerPlaceShip, playerHit, enemyHit } = this.props;

		if (isPlayerBoard) {
			return (() => playerPlaceShip(i, j));
		}
		return (() => {
			playerHit(i, j);
			this.enemyHitEasy();
		});
	}

	enemyHitEasy() {
		const { hitCandidates } = this.state.enemy;
		const len = hitCandidates.length;
		if (len == 0) return;
		const r = Math.floor(Math.random() * len);
		this.props.enemyHit(hitCandidates[r][0], hitCandidates[r][1]);
		hitCandidates[r] = hitCandidates[len - 1];
		hitCandidates.pop();
	}

	start() {
		this.setState({gameStart: true});
		this.props.enemyPlaceAllShips();
	}

	gameStatus() {
		const { gameStart } = this.state;
		const playerHealth = this.props.playerBoard.health;
		const enemyHealth = this.props.enemyBoard.health;
		const length = this.props.playerBoard.ships.length;

		if (gameStart) {
			if (playerHealth === 0 || enemyHealth === 0) {
				return <h2>{enemyHealth === 0 ? 'You' : 'Enemy'} wins</h2>;
			}
		} else if (this.props.playerBoard.ships.length === ALL_SHIPS.length){
			return (
				<div>
					Good! You placed all ships. Please click the button to start game.
					<button onClick={() => this.start()} >Start</button>
				</div>
			);	
		} else {
			return (
				<div>
					<div onChange={(e) => this.props.playerRotateShip(e.target.value === VERTICAL)}>
						Place next ship with {ALL_SHIPS[length]} length:
						<label for="shipDirVer">vertical</label>
						<input type="radio" id="shipDirVer" name="shipDir" value={VERTICAL} defaultChecked />
						<label for="shipDirHor">horizontal</label>
						<input type="radio" id="shipDirHor" name="shipDir" value={HORIZONTAL} />
					</div>
				</div>
			);
		}
	}

	render() {
		return (
			<div className="game">
				{this.gameStatus()}
					<div className="board" key='playerBoard'>
						<h4>Your Board</h4>
						{this.renderBoard(this.props.playerBoard.board)}
					</div>
					{this.state.gameStart &&
						<div className="board" key='enemyBoard'>
							<h4>Enemy Board</h4>
							{this.renderBoard(this.props.enemyBoard.board, false)}
						</div>
					}
					<Link to="/">Home Page</Link>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { playerBoard, enemyBoard } = state;
	return ({
		playerBoard, enemyBoard
	});
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		playerPlaceShip, 
		playerRotateShip, 
		enemyPlaceAllShips, 
		playerHit,
		enemyHit,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
