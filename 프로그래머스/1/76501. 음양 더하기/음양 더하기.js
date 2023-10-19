function solution(absolutes, signs) {
    for(let i = 0; i < 1001; i++){
        if(signs[i] === false){
        absolutes[i] = - absolutes[i]
        } else {
        absolutes[i]
        }
    }
    return absolutes.reduce((a, b) => a + b)
}