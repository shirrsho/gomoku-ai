import React, { useState } from 'react';
import './board.css';

const Board = () => {
	const [turn, setTurn] = useState('b');
	const [cells, setCells] = useState(Array(100).fill(''));
	const [winner, setWinner] = useState('');

	const row_count = 10;
	const col_count = 10;

	const checkForWinner = (squares) => {
		// let combos = {
		// 	across: [
		// 		[0, 1, 2],
		// 		[3, 4, 5],
		// 		[6, 7, 8],
		// 	],
		// 	down: [
		// 		[0, 3, 6],
		// 		[1, 4, 7],
		// 		[2, 5, 8],
		// 	],
		// 	diagnol: [
		// 		[0, 4, 8],
		// 		[2, 4, 6],
		// 	],
		// };

		let redrow = 0;
		let blackrow = 0;
		let redcol = 0;
		let blackcol = 0;
		let reddg = 0;
		let blackdg = 0;

		for(var i = 0 ; i < row_count ; i++){
			for(var j = 0 ; j < col_count ; j++){
				if(squares[i*10+j]==='r') redrow++;
				else if(squares[i*10+j]==='b') blackrow++;
				else {
					redrow = 0;
					blackrow = 0;
				}
				if(squares[j*10+i]==='r') redcol++;
				else if(squares[j*10+i]==='b') blackcol++;
				else {
					redcol = 0;
					blackcol = 0;
				}
				// console.log(i+" ind"+(i*10+j)+"red"+red+"black"+black);
				if(redrow===5 || redcol===5){
					setWinner('r');
					break;
				}
				else if(blackrow===5 || blackcol===5){
					setWinner('b');
					break;
				}
			}
			redrow = 0; blackrow = 0;
			redcol = 0; blackcol = 0;
			if(winner!=='') break;
		}

		for (var k = 0; k <= 2 * (row_count - 1); ++k) {
			
			for (var y = col_count - 1; y >= 0; --y) {
				var x = k - y;
				if (x >= 0 && x < row_count) {
					// console.log(y*10+x);
					if(squares[y*10+x]==='r') reddg++;
					else if(squares[y*10+x]==='b') blackdg++;
					else {
						reddg = 0;
						blackdg = 0;
					}
					if(reddg===5 || reddg===5){
						setWinner('r');
						break;
					}
					else if(blackdg===5 || blackdg===5){
						setWinner('b');
						break;
					}
				}
			}
			reddg = 0; blackdg = 0;
			if(winner!=='') break;
		}

		reddg = 0; blackdg = 0;

		for (var k = 0; k <= 2 * (row_count - 1); ++k) {
			for (var y = col_count - 1; y >= 0; --y) {
				var x = k - (col_count - y);
				if (x >= 0 && x < row_count) {
					if(squares[y*10+x]==='r') reddg++;
					else if(squares[y*10+x]==='b') blackdg++;
					else {
						reddg = 0;
						blackdg = 0;
					}
					if(reddg===5 || reddg===5){
						setWinner('r');
						break;
					}
					else if(blackdg===5 || blackdg===5){
						setWinner('b');
						break;
					}
				}
			}
		}

		// for (let combo in combos) {
		// 	combos[combo].forEach((pattern) => {
		// 		if (
		// 			squares[pattern[0]] === '' ||
		// 			squares[pattern[1]] === '' ||
		// 			squares[pattern[2]] === ''
		// 		) {
		// 			// do nothing
		// 		} else if (
		// 			squares[pattern[0]] === squares[pattern[1]] &&
		// 			squares[pattern[1]] === squares[pattern[2]]
		// 		) {
		// 			setWinner(squares[pattern[0]]);
		// 		}
		// 	});
		// }
	};

	const comMove = (squares) => {
		squares[Math.floor(Math.random()*100)] = 'r';
	}

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		if (turn === 'b') {
			squares[num] = 'b';
			setTurn('r');
			comMove(squares);
			setTurn('b');
		} else {
			squares[num] = 'r';
			setTurn('b');
		}

		checkForWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner('');
		setCells(Array(100).fill(''));
		setTurn('b');
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}><span className={cells[num]} /></td>;
	};

    var t = 0;

	return (
		<div className='container'>
			<table>
				{turn}
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
			{winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
			)}
		</div>
	);
};

export default Board;