// function solution(s) {
//     let answer = ""
//     for(let i = 0; i < s.length; i++){
//         if(i % 2 === 0){
//             answer += s[i].toUpperCase()
//         } else {
//             answer += s[i].toLowerCase()
//         }
//     }
//     return answer
// }

function solution(s) {
    const changeUpperLowerCase = (idx,string)=>{
        return idx % 2 === 0 ? string.toUpperCase() : string.toLowerCase()
    }

    const answer = s.split(' ')
                    .map(sentence => sentence.split('').map((string,idx) => changeUpperLowerCase(idx,string)).join('')).join(' ')
    return answer;
}