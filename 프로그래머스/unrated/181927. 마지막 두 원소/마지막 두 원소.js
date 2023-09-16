function solution(num_list) {
    const last = num_list[num_list.length - 1]
    const second = num_list[num_list.length - 2]
    if (last > second) {
        num_list.push(last - second)
    } else {
        num_list.push(last * 2)
    }
    return num_list
}