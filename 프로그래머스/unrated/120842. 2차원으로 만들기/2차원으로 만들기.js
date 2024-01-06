function solution(num_list, n) {
    // return num_list.splice(0, n);
    // return num_list.splice(n, n);
    // return num_list.splice(2 * n, n);
    // return num_list.splice(3 * n, n);
    // num_list.splice((length - 1) * n, n)
    
    
    let array = []
    let element = []
    let length = num_list.length / n
    for(let i = 0; i < length; i++){
        array.push(element)
    }
    
    for(let i = 0; i < length; i++){
        element.push(num_list.splice(0, n))
    }
    
    return element
//     0 1
//     2 3
//     4 5
//     6 7
    
//     0 1 2
//     3 4 5
//     6 7 8
    
    
}