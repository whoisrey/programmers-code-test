function solution(my_string, m, c) {
    let array = []
    for(let i = 0; i < my_string.length + 1; i++){
        array.push(my_string.slice(m * (i - 1), m * i)[c - 1])
    }
    return array.join('')
}

// my_string.slice(0, 4)
// my_string.slice(4, 8)
// my_string.slice(8, 12)
// my_string.slice(12, 16)