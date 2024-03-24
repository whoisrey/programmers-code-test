function solution(keyinput, board) {
    let start = [0, 0]
    
    const maxX = Math.floor(board[0] / 2)
    const maxY = Math.floor(board[1] / 2)
    console.log(maxX, maxY)
    for(let i of keyinput){
        switch(i){
            case "up":
                if(Math.abs(start[1]) < maxY){
                    start[1]++
                } else if(start[1] < 0 && Math.abs(start[1]) === maxY){
                    start[1]++
                }
                break;
            case "down":
                if(Math.abs(start[1]) < maxY){
                    start[1]--;
                } else if(start[1] > 0 && Math.abs(start[1]) === maxY){
                    start[1]--
                }
                break;
            case "left":
                if(Math.abs(start[0]) < maxX){
                    start[0]--
                } else if(start[0] > 0 && Math.abs(start[0]) === maxX){
                    start[0]--
                }
                break;
            case "right":
                if(Math.abs(start[0]) < maxX){
                    start[0]++
                } else if(start[0] < 0 && Math.abs(start[0]) === maxX){
                    start[0]++
                }
                break;
        }
    }
    return start
    // if(Math.floor(board[0] / 2) < Math.abs(start[0])){
    //     if(start[0] >= 0){
    //         start[0] = Math.floor(board[0] / 2)
    //     } else if (start[0] < 0){
    //         start[0] = - Math.floor(board[0] / 2)
    //     }        
    // }
    // if(Math.floor(board[1] / 2) < Math.abs(start[1])){
    //     if(start[1] >= 0){
    //         start[1] = Math.floor(board[1] / 2)
    //     } else if(start[1] < 0){
    //         start[1] = - Math.floor(board[1] / 2)
    //     }        
    // }
    // return start
}