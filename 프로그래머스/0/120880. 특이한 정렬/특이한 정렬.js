function solution(numlist, n) {
    const chai = [];
    for(let i of numlist){
        chai.push(i - n)
    }
    const minus = [];
    const plus = [];
    for(let i = 0; i < chai.length; i++){
        if(chai[i] > 0){
            plus.push(chai[i])
        } else if(chai[i] < 0){
            minus.push(chai[i])
        }
    }
    const array = chai.sort((a, b) => Math.abs(a) - Math.abs(b));
    const arr = chai.sort((a, b) => Math.abs(a) - Math.abs(b))
    for(let i = 0; i < arr.length; i++){
        if(Math.abs(arr[i]) === Math.abs(arr[i + 1])){
            if(arr[i] < 0){
                arr[i] = Math.abs(arr[i])
                arr[i + 1] = - arr[i]
            }
        }
    }
    return arr.map((v) => v + n)
    // if(plus.length === minus.length){
    //     return chai.sort((a, b) => Math.abs(a) - Math.abs(b)).map((v) => v + n)
    // } else {
    //     const array = chai.sort((a, b) => Math.abs(b) - Math.abs(a)).reverse()
    //     return array.map((v) => v + n)
    // }
}