function solution(board) {
    const answer = []
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] === 1){
                answer.push([i - 1, j - 1])
                answer.push([i - 1, j])
                answer.push([i - 1, j + 1])
                answer.push([i, j - 1])
                answer.push([i, j + 1])
                answer.push([i + 1, j - 1])
                answer.push([i + 1, j])
                answer.push([i + 1, j + 1])
            }
        }
    }
    let a = answer.filter((v) => {
        if(0 <= v[0] && 0 <= v[1] && v[0] < board.length && v[1] < board.length){
            return v
        }
    })
    for(let i of a){
        board[i[0]][i[1]] = 1
    }
    const b = []
    for(let i of board){
        for(let j = 0; j < board.length; j++){
            if(i[j] === 0){
                b.push(0)
            }
        }
    }
    return b.length
}

// board[3][2] board[3][1] board[3][3] board[2][1] board[2][2] board[2][3] board[4][1] board[4][2] board[4][3]
