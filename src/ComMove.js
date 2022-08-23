
export const comMove = (squares) => {
    let board = [...squares]
    let bestMove = -1;
    let score = -Infinity;

    for(let i = 0 ; i < 100 ; i++){
        if(board[i]==''){
            board[i] = 'r'
            let minimax_score = minimax(board,false,1,-Infinity,Infinity);
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

// function checkForWinner(board){
//     let squares = [...board]
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
//             else {
//                 redrow = 0;
//             }
//             if(squares[j*row_count+i]==='r') redcol++;
//             else {
//                 redcol = 0;
//             }
//             // console.log(i+" ind"+(i*10+j)+"red"+red+"black"+black);
//             if(redrow===win_count || redcol===win_count){
//                 return 'r';
//             }
//         }
//         redrow = 0; blackrow = 0;
//         redcol = 0; blackcol = 0;
//     }
//     for(var i = 0 ; i < row_count ; i++){
//         for(var j = 0 ; j < col_count ; j++){
//             if(squares[i*col_count+j]==='r') blackrow++;
//             else {
//                 blackrow = 0;
//             }
//             if(squares[j*row_count+i]==='r') blackcol++;
//             else {
//                 blackcol = 0;
//             }
//             // console.log(i+" ind"+(i*10+j)+"red"+red+"black"+black);
//             if(blackrow===win_count || blackcol===win_count){
//                 return 'b';
//             }
//         }
//         redrow = 0; blackrow = 0;
//         redcol = 0; blackcol = 0;
//     }

//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - y;
//             if (x >= 0 && x < row_count) {
//                 // console.log(y*10+x);
//                 if(squares[y*col_count+x]==='r') reddg++;
//                 else {
//                     reddg = 0;
//                 }
//                 if(reddg===win_count){
//                     return 'r'
//                 }
//             }
//         }
//         reddg = 0; blackdg = 0;
//     }
//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
        
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - y;
//             if (x >= 0 && x < row_count) {
//                 // console.log(y*10+x);
//                 if(squares[y*col_count+x]==='b') blackdg++;
//                 else {
//                     blackdg = 0;
//                 }
//                 if(blackdg===win_count){
//                     return 'b'
//                 }
//             }
//         }
//         reddg = 0; blackdg = 0;
//     }
//     reddg = 0; blackdg = 0;

//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - (col_count - y);
//             if (x >= 0 && x < row_count) {
//                 if(squares[y*col_count+x]==='r') reddg++;
//                 else {
//                     reddg = 0;
//                 }
//                 if(reddg===win_count){
//                     return 'r'
//                 }
//             }
//         }
//     }
//     for (var k = 0; k <= 2 * (row_count - 1); ++k) {
//         for (var y = col_count - 1; y >= 0; --y) {
//             var x = k - (col_count - y);
//             if (x >= 0 && x < row_count) {
//                 if(squares[y*col_count+x]==='b') blackdg++;
//                 else {
//                     blackdg = 0;
//                 }
//                 if(blackdg===win_count){
//                     return 'b'
//                 }
//             }
//         }
//     }

//     return ''
// }

function checkForWinner(board){
    let red = "rrrrr";
    let black = "bbbbb";
    // pass
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

function matcher(board){
    let redpatterns = [
        "rrrrr",
        "-rrrr-",
        "rrrr-",
        "rrr--",
        "-rrr-",
        "rr---",
        "-rr--",
        "r-rrr",
        "rr-rr",
        "r-rr-",
        "rr-r-",
        "r----"
    ];
    let blackpatterns = [
        "bbbbb",
        "-bbbb-",
        "bbbb-",
        "bbb--",
        "-bbb-",
        "bb---",
        "-bb--",
        "b-bbb",
        "bb-bb",
        "b-bb-",
        "bb-b-",
        "b----"
    ];
    
    let scores = [
        100,
        99,
        80,
        70,
        70,
        50,
        55,
        80,
        80,
        70,
        70,
        20
    ]

    let row_count = 10;
    let col_count = 10;
    let boardstate = null
    let redpoint = 0, blackpoint = 0;

    //console.log("match");

    boardstate = boardlines(board)

    for(let i = 0 ; i < 19 ; i++){
        for (let j = 0; j < redpatterns.length; j++) {
            if(i<10) if(boardstate.rows[i].includes(redpatterns[j])) redpoint += scores[j];
            if(i<10) if(boardstate.cols[i].includes(redpatterns[j])) redpoint += scores[j];
            if(boardstate.ldgs[i].includes(redpatterns[j])) redpoint += scores[j];
            if(boardstate.rdgs[i].includes(redpatterns[j])) redpoint += scores[j];
            if(i<10) if(boardstate.rows[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
            if(i<10) if(boardstate.cols[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
            if(boardstate.ldgs[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
            if(boardstate.rdgs[i].includes(redpatterns[j].split("").reverse().join(""))) redpoint += scores[j];
            
            if(i<10) if(boardstate.rows[i].includes(blackpatterns[j])) blackpoint += scores[j];
            if(i<10) if(boardstate.cols[i].includes(blackpatterns[j])) blackpoint += scores[j];
            if(boardstate.ldgs[i].includes(blackpatterns[j])) blackpoint += scores[j];
            if(boardstate.rdgs[i].includes(blackpatterns[j])) blackpoint += scores[j];
            if(i<10) if(boardstate.rows[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
            if(i<10) if(boardstate.cols[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
            if(boardstate.ldgs[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
            if(boardstate.rdgs[i].includes(blackpatterns[j].split("").reverse().join(""))) blackpoint += scores[j];
        }
    }

    //console.log(redpoint," ",blackpoint);

    if(redpoint>=blackpoint) return redpoint;
    else return -1*blackpoint;
}

function evaluate(board){
    //return Math.max(sequence(board,'r'),sequence(board,'b'))
    return matcher(board)
}

function minimax(board, maxPlayer, depth, alpha, beta){
    
    // if(winner=='r') return 10;
    // else if(winner=='b') return -10;
    if(depth==3) {
        return evaluate(board);
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
                let minimax_score = minimax(board,false,depth+1,alpha,beta)
                score = Math.max(score, minimax_score);
                alpha = Math.max(score,alpha)
                board[i] = ''
                if(alpha>=beta) {console.log('max prunned'); break;}
            }
            else {
                board[i] = 'b';
                let minimax_score =  minimax(board,true,depth+1,alpha,beta)
                score = Math.min(score, minimax_score);
                beta = Math.min(minimax_score,beta)
                board[i] = ''
                if(alpha>=beta) {console.log('min prunned'); break;}
            }
        }
    }

    return score;
}

function boardlines(squares){
    let row_count = 10;
    let col_count = 10;
    let rows = new Array(10)
    let cols = new Array(10)
    let ldgs = new Array(19)
    let rdgs = new Array(19)
    let box = [...squares]
    
    for(let i = 0 ; i < 100 ; i++) if(box[i]=='') box[i] = '-'
    for (let i = 0; i < row_count; i++) {
        rows[i] = new String
        cols[i] = new String
        for (let j = 0; j < col_count; j++) {
            rows[i] += box[i*col_count+j]
            cols[i] += box[i+col_count*j]
        }
    }

    let dgsize = 0, start = 0;
    for(let i = 0 ; i < 19 ; i++){
        start = i;
        if(i>9) start = (i-9)*9+i;
        if(i<10) dgsize = i+1;
        else dgsize--;
        ldgs[i] = new String
        for(let j = 0 ; j < dgsize ; j++){
            ldgs[i] += box[start];
            start+=9
        }
    }
    dgsize = 0; start = 0;
    for(let i = 0 ; i < 19 ; i++){
        start = 9-i;
        if(i>9) start = (i-10)*10+10;
        if(i<10) dgsize = i+1;
        else dgsize--;
        rdgs[i] = new String
        for(let j = 0 ; j < dgsize ; j++){
            rdgs[i] += box[start];
            start+=11
        }
    }
    // for(let i = 0 ; i < 19 ; i++){
    //     console.log("rows",rows[i],"cols",cols[i],"ldgs",ldgs[i],"rdgs",rdgs[i]);
    // }
    return {
        rows:rows,
        cols:cols,
        ldgs:ldgs,
        rdgs:rdgs
    }
}