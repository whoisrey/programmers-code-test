function solution(s) {
    let arr = []
    let array = s.split(" ")
    for(let i = 0; i < array.length; i++){
        if(array[i] === "Z"){
            arr.push(- Number(array[i - 1]))
        } else {
            arr.push(Number(array[i]))
        }
    }
    return arr.reduce((a, b) => a + b)
}