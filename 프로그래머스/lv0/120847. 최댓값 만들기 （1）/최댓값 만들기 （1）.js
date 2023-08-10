function solution(numbers) {
    return numbers.sort((a,b) => b - a).filter((v,i) => i < 2).reduce((a2,b2)=>(a2 * b2));
}
