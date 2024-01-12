function solution(board, k) {
    let array = []
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(i + j <= k){
                array.push(board[i][j])
            }
        }
    }
    return array.reduce((a, b) => a + b)
}