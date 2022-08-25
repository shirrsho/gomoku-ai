import { boardlines, findPattern, surrounders } from "./Board/readboard";

export const comMove = (squares) => {
    let board = [...squares]
    let bestMove = -1;
    let score = -Infinity;
    let indices = surrounders(squares)
    indices = Array.from(indices)

    for(let i = 0 ; i < indices.length ; i++){
        if(board[indices[i]]===''){
            board[indices[i]] = 'r'
            let minimax_score = minimax(board,false,1,-Infinity,Infinity);
            if(minimax_score > score){
                bestMove = indices[i];
                score = minimax_score;
            }
            board[indices[i]] = ''
        }
    }
    console.log("best: ", bestMove);
    squares[bestMove] = 'r'; // Computer max player
    bestMove = -1;
}

// function sequence(board, player){
//     let squares = [...board]
//     const row_count = 10;
// 	const col_count = 10;

//     let row = 0, trow = 0;
//     let col = 0, tcol = 0;
//     let ldg = 0, tldg = 0;
//     let rdg = 0, trdg = 0;

//     for(var i = 0 ; i < row_count ; i++){
//         for(var j = 0 ; j < col_count ; j++){
//             if(squares[i*col_count+j]===player){
//                 trow++;
//                 row = Math.max(row, trow);
//             }
//             else {
//                 trow = 0;
//             }
//             if(squares[j*row_count+i]===player){
//                 tcol++;
//                 col = Math.max(col, tcol);
//             }
//             else {
//                 tcol = 0;
//             }
//         }
//         trow = 0;
//         tcol = 0;
//     }

//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - y;
//             if (x >= 0 && x < row_count) {
//                 // console.log(y*10+x);
//                 if(squares[y*col_count+x]===player){
//                     trdg++;
//                     rdg = Math.max(rdg,trdg);
//                 }
//                 else {
//                     rdg = 0;
//                 }
//             }
//         }
//         trdg = 0;
//     }

//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - (col_count - y);
//             if (x >= 0 && x < row_count) {
//                 if(squares[y*col_count+x]===player){
//                     tldg++;
//                     ldg = Math.max(tldg,ldg);
//                 }
//                 else {
//                     tldg = 0;
//                 }
//             }
//         }
//     }

//     return Math.max(row,col,ldg,rdg)
// }

// function matcher(board){
//     let redpatterns = [
//         "rrrrr",
//         "-rrrr-",
//         "rrrr-",
//         "rrr--",
//         "-rrr-",
//         "rr---",
//         "-rr--",
//         "r-rrr",
//         "rr-rr",
//         "r-rr-",
//         "rr-r-"
//     ];
//     let blackpatterns = [
//         "bbbbb",
//         "-bbbb-",
//         "bbbb-",
//         "bbb--",
//         "-bbb-",
//         "bb---",
//         "-bb--",
//         "b-bbb",
//         "bb-bb",
//         "b-bb-",
//         "bb-b-"
//     ];
    
//     let scores = [
//         100,
//         99,
//         80,
//         70,
//         70,
//         50,
//         55,
//         80,
//         80,
//         70,
//         70
//     ]

//     // let redpatterns = [
//     //     "rrrrr",
//     //     "-rrrr-",
//     //     "-rrr-",
//     //     "rr"
//     // ]
//     // let blackpatterns = [
//     //     "bbbbb",
//     //     "-bbbb-",
//     //     "-bbb-",
//     //     "bb"
//     // ]
//     // let scores = [
//     //     100,
//     //     95,
//     //     80,
//     //     50
//     // ]

//     let row_count = 10;
//     let col_count = 10;
//     let boardstate = null
//     let redpoint = 0, blackpoint = 0;

//     //console.log("match");

//     boardstate = boardlines(board)

//     for(let i = 0 ; i < 19 ; i++){
//         for (let j = 0; j < redpatterns.length; j++) {
//             if(i<10) if(boardstate.rows[i].includes(redpatterns[j])) redpoint += scores[j];
//             if(i<10) if(boardstate.cols[i].includes(redpatterns[j])) redpoint += scores[j];
//             if(boardstate.ldgs[i].includes(redpatterns[j])) redpoint += scores[j];
//             if(boardstate.rdgs[i].includes(redpatterns[j])) redpoint += scores[j];
//             if(i<10) if(boardstate.rows[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
//             if(i<10) if(boardstate.cols[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
//             if(boardstate.ldgs[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
//             if(boardstate.rdgs[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
            
//             if(i<10) if(boardstate.rows[i].includes(blackpatterns[j])) blackpoint += scores[j];
//             if(i<10) if(boardstate.cols[i].includes(blackpatterns[j])) blackpoint += scores[j];
//             if(boardstate.ldgs[i].includes(blackpatterns[j])) blackpoint += scores[j];
//             if(boardstate.rdgs[i].includes(blackpatterns[j])) blackpoint += scores[j];
//             if(i<10) if(boardstate.rows[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
//             if(i<10) if(boardstate.cols[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
//             if(boardstate.ldgs[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
//             if(boardstate.rdgs[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
//         }
//     }

//     //console.log(redpoint," ",blackpoint);

//     if(redpoint>=blackpoint) return redpoint;
//     else return -1*blackpoint;
// }

function getBoardEval(board,maxPlayer){
    let redfavor = {
        fiveinrow: ["rrrrr"],
        livefour: [
            "-rrrr-",
        ],
        deadfour: [
            "brrrr-",
            "rrr-r",
            "rr-rr"
        ],
        livethree: [
            "-rrr-",
            "rr-r"
        ],
        deadthree: [
            "brrr-",
            "brr-r",
            "br-rr",
            "rr--r",
            "r-r-r",
            "b-rrr-b"
        ],
        livetwo: [
            "r---r"
        ],
        deadtwo: [
            "r-r",
            "r--r",
            "brr",
            "br-r",
            "br--r",
            "rr"
        ]
    }
    let blackfavor = {
        fiveinrow: ["bbbbb"],
        livefour: [
            "-bbbb-",
        ],
        deadfour: [
            "rbbbb-",
            "bbb-b",
            "bb-bb"
        ],
        livethree: [
            "-bbb-",
            "bb-b"
        ],
        deadthree: [
            "rbbb-",
            "rbb-b",
            "rb-bb",
            "bb--b",
            "b-b-b",
            "r-bbb-r"
        ],
        livetwo: [
            "b---b"
        ],
        deadtwo: [
            "b-b",
            "b--b",
            "rbb",
            "rb-b",
            "rb--b",
            "bb"
        ]
    }
    let redscore = 0, blackscore = 0;
    let fiveinrow = 0, livefour = 0, livethree = 0, deadfour = 0, deadthree = 0, deadtwo = 0;

    for(let i = 0 ; i < redfavor.fiveinrow.length ; i++){
        if(findPattern(board,redfavor.fiveinrow[i]) > 0) return 1000;
        if(findPattern(board,blackfavor.fiveinrow[i]) > 0) return -1000;
    }
    for(let i = 0 ; i < redfavor.livefour.length ; i++){
        if(findPattern(board,redfavor.livefour[i])) return 1000;
        if(findPattern(board,blackfavor.livefour[i]) > 0) return -1000;
    }
    for(let i = 0 ; i < redfavor.deadfour.length ; i++){
        if(findPattern(board,redfavor.deadfour[i]) > 0){
            if(maxPlayer) return 1000;
            else redscore += 100;
        }
        if(findPattern(board,blackfavor.deadfour[i]) > 0){
            if(!maxPlayer) return -1000;
            else blackscore += findPattern(board,blackfavor.deadfour[i])*100;
        }
    }
    for(let i = 0 ; i < redfavor.livethree.length ; i++){
        if(findPattern(board,redfavor.livethree[i]) > 0){
            if(maxPlayer) return 1000;
            else redscore += findPattern(board,redfavor.livethree[i])*200;
        }
        if(findPattern(board,blackfavor.livethree[i]) > 0){
            if(!maxPlayer) return -1000;
            else blackscore += findPattern(board,blackfavor.livethree[i])*200;
        }
    }
    for(let i = 0 ; i < redfavor.deadthree.length ; i++){
        if(findPattern(board,redfavor.deadthree[i]) > 0) redscore += findPattern(board,redfavor.deadthree[i])*150;
        if(findPattern(board,blackfavor.deadthree[i]) > 0) blackscore += findPattern(board,blackfavor.deadthree[i])*150;
    }
    for(let i = 0 ; i < redfavor.livetwo.length ; i++){
        if(findPattern(board,redfavor.livetwo[i]) > 0) redscore += findPattern(board,redfavor.livetwo[i])*50;
        if(findPattern(board,blackfavor.livetwo[i]) > 0) blackscore += findPattern(board,blackfavor.livetwo[i])*50;
    }
    for(let i = 0 ; i < redfavor.deadtwo.length ; i++){
        if(findPattern(board,redfavor.deadtwo[i]) > 0) redscore += findPattern(board,redfavor.deadtwo[i])*20;
        if(findPattern(board,blackfavor.deadtwo[i]) > 0) blackscore += findPattern(board,blackfavor.deadtwo[i])*20;
    }
    
    if(redscore >= blackscore) return redscore;
    else return -1*blackscore;
}

function evaluate(board,maxPlayer){
    // return Math.random()*100
    return getBoardEval(board,maxPlayer);
    // if(sequence(board,'r')>=sequence(board,'b')) return sequence(board,'r') * 10;
    // else return sequence(board,'b') * -10
    // return Math.max(sequence(board,'r'),sequence(board,'b'))
    // return matcher(board)
}

function minimax(board, maxPlayer, depth, alpha, beta){
    // let winner = checkForWinner(board);
    // if(winner=='r') return 10;
    // else if(winner=='b') return -10;
    if(depth===3) {
        return evaluate(board,maxPlayer);
    }

    //console.log(depth);
    let score = 0;
    if(maxPlayer) score = -Infinity;
    else score = Infinity;

    let indices = surrounders(board)
    indices = Array.from(indices)

    for(let i = 0 ; i < indices.length ; i++){
        if(board[indices[i]]===''){
            board[indices[i]] = 'r'
            if(maxPlayer) {
                board[indices[i]] = 'r';
                let minimax_score = minimax(board,false,depth+1,alpha,beta)
                score = Math.max(score, minimax_score);
                alpha = Math.max(score,alpha)
                board[indices[i]] = ''
                if(alpha>=beta) {console.log('max prunned'); break;}
            }
            else {
                board[indices[i]] = 'b';
                let minimax_score =  minimax(board,true,depth+1,alpha,beta)
                score = Math.min(score, minimax_score);
                beta = Math.min(minimax_score,beta)
                board[indices[i]] = ''
                if(alpha>=beta) {console.log('min prunned'); break;}
            }
        }
    }

    return score;
}
