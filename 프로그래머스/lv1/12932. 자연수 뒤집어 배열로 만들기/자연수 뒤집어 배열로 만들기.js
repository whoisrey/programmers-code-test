function solution(n) {
    var answer = [];
    
    return n.toString().split('').reverse().map((v) => parseInt(v));
}