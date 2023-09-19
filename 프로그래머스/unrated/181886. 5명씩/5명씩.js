function solution(names) {
    const number = []
    for (let i = 0; i < names.length; i+= 5){
        if(i % 5 === 0) {
            number.push(names[i])
        }
    }
    return number

}