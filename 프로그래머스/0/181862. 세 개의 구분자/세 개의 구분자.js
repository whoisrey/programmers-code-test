function solution(myStr) {
    let arr = myStr.split('')
    let array = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "a" || arr[i] === "b" || arr[i] === "c"){
            array.push("|")
        } else {
            array.push(arr[i])
        }
    }
    const answer = array.join("").split("|")
    let wow = []
    for(let j = 0; j < answer.length; j++){
        if(answer[j] !== ""){
            wow.push(answer[j])
        }
    }
    return wow.length === 0 ? ["EMPTY"] : wow
}