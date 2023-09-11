function solution(num_list) {
    let sum = num_list.reduce((a, b) => a + b)
    let multiple = num_list.reduce((a, b) => a * b)
    if (num_list.length > 10) {
        return sum;
    } 
    else {
        return multiple;
    }
}