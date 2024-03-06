function solution(strArr) {
    const lengthArr = strArr.map((v) => v.length)
    const sortArr = lengthArr.sort()
    const setArr = [...new Set(sortArr)]
    let a = {}
    for(let i = 1; i <= 30; i++){
        for(let j of sortArr){
            if(i === j){
                a[i] += "a"
            }
        }
    }
    for(let i = 1; i <= setArr.length; i++){
        a[String(i)] = a[String(i)].slice(9) 
    }
    const answer = []
    for(let i = 1; i <= 30; i++){
        if(a[String(i)]){
            answer.push(a[String(i)].length)
        }
    }
    return Math.max(...answer)
}