function solution(numbers) {
    let array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for(let i = 0; i < array.length; i++){
        numbers = numbers.replaceAll(array[i], i)
        console.log(numbers)
    }
    return parseInt(numbers)
}