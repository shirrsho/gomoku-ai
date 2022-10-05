import { findPattern, surrounders } from "./Board/readboard";

export const comMove = (squares) => {
    let board = [...squares]
    let bestMove = -1;
    let score = -Infinity;
    let indices = surrounders(squares)
    indices = Array.from(indices)

    for(let i = 0 ; i < indices.length ; i++){
        //console.log(indices[i]);
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
    
    console.log("best: ", bestMove, "score: ",score);
    //squares[bestMove] = 'r'; // Computer max player
    return bestMove;
}

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
    // let fiveinrow = 0, livefour = 0, livethree = 0, deadfour = 0, deadthree = 0, deadtwo = 0;

    for(let i = 0 ; i < redfavor.fiveinrow.length ; i++){
        if(findPattern(board,redfavor.fiveinrow[i]) > 0) return 1000000;
        if(findPattern(board,blackfavor.fiveinrow[i]) > 0) return -1000000;
    }
    for(let i = 0 ; i < redfavor.livefour.length ; i++){
        if(findPattern(board,redfavor.livefour[i])) return 100000;
        if(findPattern(board,blackfavor.livefour[i]) > 0) return -100000;
    }
    for(let i = 0 ; i < redfavor.deadfour.length ; i++){
        if(findPattern(board,redfavor.deadfour[i]) > 0){
            if(maxPlayer) return 10000;
            else redscore += findPattern(board,redfavor.deadfour[i])*10000;
        }
        if(findPattern(board,blackfavor.deadfour[i]) > 0){
            if(!maxPlayer) return -10000;
            else blackscore += findPattern(board,blackfavor.deadfour[i])*10000;
        }
    }
    for(let i = 0 ; i < redfavor.livethree.length ; i++){
        if(findPattern(board,redfavor.livethree[i]) > 0){
            if(maxPlayer) return 5000;
            else redscore += findPattern(board,redfavor.livethree[i])*4000;
        }
        if(findPattern(board,blackfavor.livethree[i]) > 0){
            if(!maxPlayer) return -4500;
            else blackscore += findPattern(board,blackfavor.livethree[i])*4000;
        }
    }
    for(let i = 0 ; i < redfavor.deadthree.length ; i++){
        if(findPattern(board,redfavor.deadthree[i]) > 0){
            if(maxPlayer) return 2000;
            else redscore += findPattern(board,redfavor.deadthree[i])*4000;
        }
        if(findPattern(board,blackfavor.deadthree[i]) > 0){
            if(!maxPlayer) return -2000;
            else blackscore += findPattern(board,blackfavor.deadthree[i])*4000;
        }
        // if(findPattern(board,redfavor.deadthree[i]) > 0) redscore += findPattern(board,redfavor.deadthree[i])*300;
        // if(findPattern(board,blackfavor.deadthree[i]) > 0) blackscore += findPattern(board,blackfavor.deadthree[i])*300;
    }
    for(let i = 0 ; i < redfavor.livetwo.length ; i++){
        if(findPattern(board,redfavor.livetwo[i]) > 0) redscore += findPattern(board,redfavor.livetwo[i])*200;
        if(findPattern(board,blackfavor.livetwo[i]) > 0) blackscore += findPattern(board,blackfavor.livetwo[i])*200;
    }
    for(let i = 0 ; i < redfavor.deadtwo.length ; i++){
        if(findPattern(board,redfavor.deadtwo[i]) > 0) redscore += findPattern(board,redfavor.deadtwo[i])*100;
        if(findPattern(board,blackfavor.deadtwo[i]) > 0) blackscore += findPattern(board,blackfavor.deadtwo[i])*100;
    }
    
    if(redscore > blackscore) return redscore;
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

    let boardvalue = evaluate(board,maxPlayer)
    if(depth===3 || boardvalue===1000000 || boardvalue===-1000000) {
        //console.log(boardvalue);
        return boardvalue;
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
                if(alpha>=beta) {break;}
            }
            else {
                board[indices[i]] = 'b';
                let minimax_score =  minimax(board,true,depth+1,alpha,beta)
                score = Math.min(score, minimax_score);
                beta = Math.min(minimax_score,beta)
                board[indices[i]] = ''
                if(alpha>=beta) { break;}
            }
        }
    }

    return score;
}
