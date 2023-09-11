function solution(num_list) {
    const sortedList = num_list.slice().sort((a, b) => a - b);
    const result = sortedList.slice(5);
    return result;
}
