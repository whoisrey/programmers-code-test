function solution(sides) {
var answer = 0;
const max = Math.max(...sides);
const sum = sides.reduce((a,b) => a + b, 0) - max;
answer = max < sum? 1 : 2; return answer;
}
