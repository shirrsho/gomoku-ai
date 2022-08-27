import React, { useEffect, useState } from 'react';
import './board.css';
import { comMove } from '../ComMove';
import { checkForWinner } from './readboard';

const Board = () => {
	const row_count = 10;
	const col_count = 10;
	//const win_count = 5;
	
	const [turn, setTurn] = useState('b');
	const [cells, setCells] = useState(Array(row_count*col_count).fill(''));
	const [winner, setWinner] = useState('');

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'b') {
			squares[num] = 'b';
			setCells(squares)
			//boardlines(squares);
			// comMove(squares);
			// setTurn('b');
			setTurn('r');
		} else {
			squares[num] = 'r';
			setTurn('b');
			// boardlines(squares);
		}
		//console.log(cells);
		setCells(squares);
		setWinner(checkForWinner(squares));
	};

	const handleRestart = () => {
		setWinner('');
		setCells(Array(row_count*col_count).fill(''));
		setTurn('b');
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}><div className={cells[num]} /></td>;
	};

	useEffect(() => {
		setTimeout(() => {
			if(turn == 'r'){
				let squares = [...cells]
				let best = comMove(squares)
				handleClick(best);
			}
		}, 0)
	},[turn])

    var t = 0;

	return (
		<div className='container mt-5'>
			{turn==='r' && (
				<b><p><span class="red">Red</span>'s Turn!</p></b>
			)}
			{turn==='b' && (
				<b><p>Your Turn!</p></b>
			)}
			<table className="box">
				<tbody>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
				</tbody>
			</table>
			{winner==='r' && (
				<>
					<b className="mt-4 mb-3"><p><span class="red">Red</span> is the winner!</p></b>
					<button class="btndd" onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
			{winner==='b' && (
				<>
					<b className="mt-4 mb-3"><p><span class="black">Black</span> is the winner!</p></b>
					<button class="btndd" onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
			<button class="btndd mt-4" onClick={() => handleRestart()}>Restart Game</button>
		</div>
	);
};

export default Board;