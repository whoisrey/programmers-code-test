function solution(num_list) {
    let sum = num_list.reduce((a, b) => a + b);
    let multiple = num_list.reduce((a, b) => a * b);
    if (Math.pow(sum, 2) > multiple) 
        return 1;
    return 0;
}