function solution(code) {
    const array = code.split('')
    let mode = 0;
    const retCode = array.filter((v, i) => {
        if(v === "1"){
            mode = mode === 0 ? 1 : 0
            return false
        }
        if(mode){
            return i % 2 === 1
        }
        return i % 2 === 0
    }).join('')
    return retCode.length === 0 ? "EMPTY" : retCode
}

