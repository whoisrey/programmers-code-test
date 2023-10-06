function solution(n) {
    let string = String(n);
    let sum = 0;
    for (let i = 0; i < string.length; i++){
        sum += Number(string[i])
    }
    
    return sum
}