function solution(array, height) {
    let answer = 0;
    array.forEach(function(i) {
        if(i > height) {
            answer++;
        }
    })
    return answer;
}