function solution(s) {
    let array = []
    if(s.length % 2 === 0){
        array.push(s[s.length / 2 - 1])
        array.push(s[s.length / 2])
    } else {
        array.push(s[parseInt(s.length / 2)])
    }
    return array.join('')
}