// function solution(my_string, indices) {
//     let array = [...my_string]
//     let index = indices.sort((a, b) => a - b)
//     let arr = []
//     let answer = []
//     for(let i = 0; i < my_string.length; i++){
//         if(!indices.includes(i)){
//             arr.push(i)
//         }
//     }
//     for(let j = 0; j < my_string.length; j++){
//         answer.push(my_string[arr[j]])
//     }
//     return answer.join('')
// }

function solution(my_string, indices) {
    return my_string
        .split("")
        .filter((str, strIdx) => !indices.includes(strIdx))
        .join("");
}