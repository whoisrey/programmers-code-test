function solution(numbers, k) {
    let sum = 1;
    for(let i = 0; i < k - 1; i++){
        sum = sum + 2
        console.log(sum)
    }
    if(sum % numbers.length === 0){
        return numbers[numbers.length - 1]
    } else {
        return sum % numbers.length
    }
    
}

       