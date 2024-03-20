function solution(a, b, c, d) {
    const arr = [a, b, c, d]
    const array = [...new Set(arr)]
    switch(array.length){
        case 1:
            return 1111 * arr[0]
        case 4:
            return Math.min(...arr)
        case 3:
            let answer = []
            let a = array.reduce((a, b) => a + b)
            let b = arr.reduce((a, b) => a + b)
            let c = (b - a)
            for(let i of array){
                if(i !== c){
                    answer.push(i)
                }
            }
            return answer[0] * answer[1]
        case 2:
            let d = arr.sort()
            if(d[0] === d[1] && d[2] === d[3]){
                return (array[0] + array[1]) * Math.abs(array[0] - array[1])
            } 
            let e = array.reduce((a, b) => a + b)
            let f = arr.reduce((a, b) => a + b)
            let g = (f - e) / 2
            let h = e - g
            return (10 * g + h) ** 2
    }
}