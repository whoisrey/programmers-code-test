function solution(n) {
    let even = 0;
    for (i = 1; i <= n;i++){
        if(i % 2 === 0) {
            even += i;
        }
    }
    return even;
}