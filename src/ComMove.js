import matchers from '@testing-library/jest-dom/matchers';
import React, { useState } from 'react';

export const comMove = (squares) => {
    let board = [...squares]
    let bestMove = -1;
    let score = -Infinity;

    for(let i = 0 ; i < 100 ; i++){
        if(board[i]==''){
            board[i] = 'r'
            let minimax_score = minimax(board,false,1);
            if(minimax_score > score){
                bestMove = i;
                score = minimax_score;
            }
            board[i] = ''
        }
    }
    console.log("best: ", bestMove);
    squares[bestMove] = 'r'; // Computer max player
    bestMove = -1;
}



// const checkForWinner = (squares) => {

//     const [winner, setWinner] = useState('');
//     const row_count = 10;
// 	const col_count = 10;
// 	const win_count = 5;

//     let redrow = 0;
//     let blackrow = 0;
//     let redcol = 0;
//     let blackcol = 0;
//     let reddg = 0;
//     let blackdg = 0;

//     for(var i = 0 ; i < row_count ; i++){
//         for(var j = 0 ; j < col_count ; j++){
//             if(squares[i*col_count+j]==='r') redrow++;
//             else if(squares[i*col_count+j]==='b') blackrow++;
//             else {
//                 redrow = 0;
//                 blackrow = 0;
//             }
//             if(squares[j*row_count+i]==='r') redcol++;
//             else if(squares[j*row_count+i]==='b') blackcol++;
//             else {
//                 redcol = 0;
//                 blackcol = 0;
//             }
//             // console.log(i+" ind"+(i*10+j)+"red"+red+"black"+black);
//             if(redrow===win_count || redcol===win_count){
//                 setWinner('r');
//                 break;
//             }
//             else if(blackrow===win_count || blackcol===win_count){
//                 setWinner('b');
//                 break;
//             }
//         }
//         redrow = 0; blackrow = 0;
//         redcol = 0; blackcol = 0;
//         if(winner!=='') break;
//     }

//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - y;
//             if (x >= 0 && x < row_count) {
//                 // console.log(y*10+x);
//                 if(squares[y*col_count+x]==='r') reddg++;
//                 else if(squares[y*col_count+x]==='b') blackdg++;
//                 else {
//                     reddg = 0;
//                     blackdg = 0;
//                 }
//                 if(reddg===win_count || reddg===win_count){
//                     setWinner('r');
//                     break;
//                 }
//                 else if(blackdg===win_count || blackdg===win_count){
//                     setWinner('b');
//                     break;
//                 }
//             }
//         }
//         reddg = 0; blackdg = 0;
//         if(winner!=='') break;
//     }

//     reddg = 0; blackdg = 0;

//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - (col_count - y);
//             if (x >= 0 && x < row_count) {
//                 if(squares[y*col_count+x]==='r') reddg++;
//                 else if(squares[y*col_count+x]==='b') blackdg++;
//                 else {
//                     reddg = 0;
//                     blackdg = 0;
//                 }
//                 if(reddg===win_count || reddg===win_count){
//                     setWinner('r');
//                     break;
//                 }
//                 else if(blackdg===win_count || blackdg===win_count){
//                     setWinner('b');
//                     break;
//                 }
//             }
//         }
//     }
// };

function checkForWinner(board){
    let squares = [...board]
    const row_count = 10;
	const col_count = 10;
	const win_count = 5;

    let redrow = 0;
    let blackrow = 0;
    let redcol = 0;
    let blackcol = 0;
    let reddg = 0;
    let blackdg = 0;

    for(var i = 0 ; i < row_count ; i++){
        for(var j = 0 ; j < col_count ; j++){
            if(squares[i*col_count+j]==='r') redrow++;
            else if(squares[i*col_count+j]==='b') blackrow++;
            else {
                redrow = 0;
                blackrow = 0;
            }
            if(squares[j*row_count+i]==='r') redcol++;
            else if(squares[j*row_count+i]==='b') blackcol++;
            else {
                redcol = 0;
                blackcol = 0;
            }
            // console.log(i+" ind"+(i*10+j)+"red"+red+"black"+black);
            if(redrow===win_count || redcol===win_count){
                return 'r';
            }
            else if(blackrow===win_count || blackcol===win_count){
                return 'b'
            }
        }
        redrow = 0; blackrow = 0;
        redcol = 0; blackcol = 0;
    }

    for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        
        for (var y = col_count - 1; y >= 0; --y) {
            var x = k - y;
            if (x >= 0 && x < row_count) {
                // console.log(y*10+x);
                if(squares[y*col_count+x]==='r') reddg++;
                else if(squares[y*col_count+x]==='b') blackdg++;
                else {
                    reddg = 0;
                    blackdg = 0;
                }
                if(reddg===win_count || reddg===win_count){
                    return 'r'
                }
                else if(blackdg===win_count || blackdg===win_count){
                    return 'b'
                }
            }
        }
        reddg = 0; blackdg = 0;
    }

    reddg = 0; blackdg = 0;

    for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        for (var y = col_count - 1; y >= 0; --y) {
            var x = k - (col_count - y);
            if (x >= 0 && x < row_count) {
                if(squares[y*col_count+x]==='r') reddg++;
                else if(squares[y*col_count+x]==='b') blackdg++;
                else {
                    reddg = 0;
                    blackdg = 0;
                }
                if(reddg===win_count || reddg===win_count){
                    return 'r'
                }
                else if(blackdg===win_count || blackdg===win_count){
                    return 'b'
                }
            }
        }
    }

    return ''
}

function sequence(board, player){
    let squares = [...board]
    const row_count = 10;
	const col_count = 10;

    let row = 0, trow = 0;
    let col = 0, tcol = 0;
    let ldg = 0, tldg = 0;
    let rdg = 0, trdg = 0;

    for(var i = 0 ; i < row_count ; i++){
        for(var j = 0 ; j < col_count ; j++){
            if(squares[i*col_count+j]===player){
                trow++;
                row = Math.max(row, trow);
            }
            else {
                trow = 0;
            }
            if(squares[j*row_count+i]===player){
                tcol++;
                col = Math.max(col, tcol);
            }
            else {
                tcol = 0;
            }
        }
        trow = 0;
        tcol = 0;
    }

    for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        
        for (var y = col_count - 1; y >= 0; --y) {
            var x = k - y;
            if (x >= 0 && x < row_count) {
                // console.log(y*10+x);
                if(squares[y*col_count+x]===player){
                    trdg++;
                    rdg = Math.max(rdg,trdg);
                }
                else {
                    rdg = 0;
                }
            }
        }
        trdg = 0;
    }

    for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        for (var y = col_count - 1; y >= 0; --y) {
            var x = k - (col_count - y);
            if (x >= 0 && x < row_count) {
                if(squares[y*col_count+x]===player){
                    tldg++;
                    ldg = Math.max(tldg,ldg);
                }
                else {
                    tldg = 0;
                }
            }
        }
    }

    return Math.max(row,col,ldg,rdg)
}

patterns = [
    "bbbbb",
    "bbbb-",
    "bbb--",
    "-bbb-",
    "bb---",
    "-bb--",
    "b-bbb",
    "bb-bb",
    "b-bb-",
    "bb-b-",
    "--b--",

    "rrrrr",
    "rrrr-",
    "rrr--",
    "-rrr-",
    "rr---",
    "-rr--",
    "r-rrr",
    "rr-rr",
    "r-rr-",
    "rr-r-",
    "--r--"
];

function matcher(board,player){

}

function evaluate(board,player){
    //return sequence(board,player)
    return matcher(board,player)
}

function minimax(board, maxPlayer, depth){
    
    // if(winner=='r') return 10;
    // else if(winner=='b') return -10;
    if(depth==3) {
        let red = evaluate(board,'r')
        let black = evaluate(board,'b')
        if(red>=black) return red;
        else return -1*black;
    }

    //console.log(depth);
    let score = 0;
    if(maxPlayer) score = -Infinity;
    else score = Infinity;

    for(let i = 0 ; i < 100 ; i++){
        if(board[i]==''){
            board[i] = 'r'
            if(maxPlayer) {
                board[i] = 'r';
                score = Math.max(score, minimax(board,false,depth+1));
                board[i] = ''
            }
            else {
                board[i] = 'b';
                score = Math.min(score, minimax(board,true,depth+1));
                board[i] = ''
            }
        }
    }

    return score;
}