function solution(polynomial) {
    const array = polynomial.split(' ')
    let xArray = array.filter((v) => v.includes("x"))
    let noArray = array.filter((v) => !v.includes("x") && !v.includes("+"))
    
    // x의 개수
    let x = xArray.filter((v) => v === "x")
    // x.length
    
    // x의 배수
    let numX = xArray.filter((v) => v!== "x")
    const numXArray = numX.map((v) => parseInt(v))
    const xNumber = numXArray.length === 0 ? 0 : numXArray.reduce((a, b) => a + b) 
    
    // 숫자
    let num = noArray.map((v) => parseInt(v))
    const number = num.length === 0 ? 0 : num.reduce((a, b) => a + b)
        
    if(polynomial === "x"){
        return 'x'
    }else if(number === 0){
        return `${xNumber + x.length}x`
    } else if(xNumber + x.length === 0){
        return `${number}`
    } else if(xNumber + x.length === 1){
        return `x + ${number}`
    } else if(number === 0 && xNumber + x.length === 1){
        return `x`
    } else {
        return `${xNumber + x.length}x + ${number}`
    }
        
}