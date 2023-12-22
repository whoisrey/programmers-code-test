function solution(my_string, num1, num2) {
    let array = my_string.split('')
    let first = my_string[num1]
    let second = my_string[num2]
    array.splice(num1, 1, my_string[num2])
    array.splice(num2, 1, my_string[num1])
    return array.join('')
}