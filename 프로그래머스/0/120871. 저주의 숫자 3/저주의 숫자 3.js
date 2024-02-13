function solution(n) {
    let array = [];
    for(let i = 1; i <= 200; i++){
        if(i % 3 !== 0 && !String(i).includes("3")){
            array.push(parseInt(i))
        }
    }
    
    return array[n - 1]
}