function solution(order) {
    let string = String(order)
    let array = []
    for(let i = 0; i < string.length; i++){
        if(string[i] === "3" || string[i] === "6" || string[i] === "9"){
            array.push(string[i])
        }
    }
    return array.length
}