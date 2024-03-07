function solution(my_string, queries) {
    let array = my_string.split('')
    for(let i = 0; i < queries.length; i++){        
        for(let j = 0; j <= queries[i][1] - queries[i][0]; j++){
            array[queries[i][0] + j] = my_string[queries[i][1] - j]
        }
        my_string = array.join('')
    }
    return array.join('')
}