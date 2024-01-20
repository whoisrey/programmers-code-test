function solution(s) {
    let index = s.split('').sort()
    let array = []
    for(let i = 0; i < index.length; i++){
        if(index.indexOf(index[i]) == index.lastIndexOf(index[i])){
            array.push(index[i])
        }
    }
    return array.join('')
}