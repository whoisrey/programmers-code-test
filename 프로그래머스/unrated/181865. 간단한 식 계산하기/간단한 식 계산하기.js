function solution(binomial) {
    let array = binomial.split(' ')
    switch(array[1]){
        case '+':
            return Number(array[0]) + Number(array[2])
            break;
            case '-':
            return Number(array[0]) - Number(array[2])
            break;
            case '*':
            return Number(array[0]) * Number(array[2])
            break;
    
    }
}