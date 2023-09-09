function solution(a, b, flag) {
    let trueAnswer = a + b;
    let falseAnswer = a - b;
    if(flag === true) {
        return trueAnswer;
    } 
    else {
        return falseAnswer;
    }
}