function solution(myString) {
    let array = myString.split('x').filter((v) => v.length !== 0).sort()
    // let answer = array.sort()
    // if(answer[0].length == 0){
    //     answer.shift()
    // }
    return array
}