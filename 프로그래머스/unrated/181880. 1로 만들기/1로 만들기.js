function solution(num_list) {
    let answer = 0;
    let num = 0;
    for (let i=0; i<num_list.length; i++) {
        for (let j=0; j<num_list[i]; j++) {
            if (j === 0) num = num_list[i];
            if (num === 1) {
                console.log('===> ', num, j);
                answer += j;
                break;
            }
            if (num % 2 === 0) {
                console.log('even ', num, j);
                num = num / 2;
            }
            else if (num % 2 === 1) {
                console.log('odd ', num, j);
                num = (num - 1) / 2;
            }
        }
    }
    return answer;
}