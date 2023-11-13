function solution(numbers, direction) {
    let array = []
    if(direction === "right"){
        for(let i = 0; i < numbers.length; i++){
            array.push(numbers[i - 1])
        }
        array.shift()
        array.unshift(numbers[numbers.length - 1])
    } else {
        for(let i = 0; i < numbers.length; i++){
            array.push(numbers[i + 1])
        }
        array.pop()
        array.push(numbers[0])
    }
    return array
}