function solution(bin1, bin2) {
    let binOne = bin1.split('').reverse().map((v, i) => Number(v) * 2 ** i).reduce((a, b) => a + b)
    let binTwo = bin2.split('').reverse().map((v, i) => Number(v) * 2 ** i).reduce((a, b) => a + b)
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
    

    // return parseInt(String(binOne + binTwo), 2)
    
}