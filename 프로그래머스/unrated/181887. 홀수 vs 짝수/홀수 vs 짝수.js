function solution(num_list) {
    let sum = 0
    let sumCopy = 0
    for(let i = 0; i < num_list.length; i += 2){
        sum += num_list[i]
    }
    for (let j = 1; j < num_list.length; j += 2){
        sumCopy += num_list[j]
    }
    if(sumCopy > sum){
        return sumCopy
    } else if(sumCopy < sum){
        return sum
    } else {
        return sum
    }
}