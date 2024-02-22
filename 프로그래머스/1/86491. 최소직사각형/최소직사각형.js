function solution(sizes) {
    let garo = []
    let sero = []
    let size = []
    for(let i = 0; i < sizes.length; i++){
        size.push(sizes[i].sort((a, b) => b - a))
    }
    for(let i = 0; i < size.length; i++){
        garo.push(size[i][0])
        sero.push(size[i][1])
    }
    let nubi = Math.max(...garo) * Math.max(...sero)
    return nubi
}