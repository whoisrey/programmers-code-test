// function solution(n) {
//     let arr = []
//     let array = []
//     for(let j = 0; j < n; j++){
//         array[j] = 0
//     }
//     for(let i = 0; i < n; i++){
//         arr.push(array)
//     }
//     for(let k = 0; k < n; k++){
//         const item = arr[k]
//         arr[k][k] = 1
//     }
//     return arr
// }

function solution(n) {
    const answer = [];

    for (let i=0; i<n; i++) {
        answer.push(Array(n).fill(0));
    }

    for (let i=0; i<answer.length; i++) {
        const item = answer[i];

        answer[i][i] = 1;
    }

    return answer;
}