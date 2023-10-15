function solution(my_string) {
    let array = []
    let my_array = my_string.split('').filter((v) => v % 1 === 0)
    for(let i = 0; i < my_array.length; i++){
        array.push(parseInt(my_array[i]))
    }
    return array.sort((a, b) => a - b)
    
}