function solution(n) {
    let array = []
    for(let i = 0; i < n + 1; i++){
        if(n % i === 0){
            array.push(i)
        }
    }
    return array
}