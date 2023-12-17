function solution(my_strings, parts) {
    let array = [];
    for(let i = 0; i < parts.length; i++){
      
            array.push(my_strings[i].slice(parts[i][0], parts[i][1] + 1))
        
        // my_strings[0].slice(parts[i][0], parts[i][1])
        // my_strings[1].slice(parts[1][0], parts[1][1])
        // my_strings[2].slice(parts[2][0], parts[2][1])
        // my_strings[3].slice(parts[3][0], parts[3][1])
        // array.push(my_strings[i].slice(parts[i][j], parts[i][j]))
        
    }
    return array.join('')
}