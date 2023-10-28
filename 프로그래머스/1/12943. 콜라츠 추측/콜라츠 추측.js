function solution(num) {
    let array = []
    let noArray = -1
    for(let i = 0; i < 500; i++){
        if(num === 1){
            array = array
        } else {
        if(num % 2 === 0){
            num = num / 2
            array.push(i)
            if(num === 1){
                break;
            }
        } else {
            num = num * 3 + 1
            array.push(i)
            if(num === 1){
                break;
            }
        }
            }
    }
    
    return array.length === 500 ? noArray : array.length
}