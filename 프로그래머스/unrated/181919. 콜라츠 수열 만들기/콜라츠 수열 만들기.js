function solution(n) {
    let answer = [];
    const isOdd = x => x % 2 === 1;
    const isEven = x => x % 2 === 0;

    // 콜라츠 수열은 결국 무조건 1이 되므로 아래와 같이 조건 작성
    while (n > 0) {
        // answer.push(n) 이 첫 실행문인 이유는 결과 값에 '시작점인 n'도 포함이 되어야 하기 때문
        answer.push(n);

        // 콜라츠 수열이 결국 1이 되면 반복을 멈추기
        if (n === 1) break;

        // 짝수면 n = n / 2;
        if (isEven(n)) {
            n = n / 2;
        }
        // 홀수면 n = 3 * n + 1;
        else if (isOdd(n)) {
            n = 3 * n + 1;
        }
    }

    return answer;
}