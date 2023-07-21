function solution(denum1, num1, denum2, num2) {
	// Step1: 분모를 통분하여 분자의 덧셈
    const denumTotal = (num1 * denum2) + (num2 * denum1);
    
    // Step2: 분모 통분
    const numTotal = num1 * num2;
    
    // Step3: 최대 공약수 재귀 함수 구현
    const getGreatestCommonDivisor = (x, y) => {
    	// y가 0일 때 재귀함수 탈출
        if (y === 0) return x;
        // y가 0이 아닌 경우 계속 함수 호출
        else {
        	// 첫 번째 인자 자리에 y 전달, 두 번째 인자 자리에 x % y로 나머지를 전달
            return getGreatestCommonDivisor(y, x % y);
        }
    }
    
    // Step4: 최대 공약수를 구함
    const gcd = getGreatestCommonDivisor(denumTotal, numTotal);
    
    // Step5: 분자와 분모를 최대공약수로 나눔
    return [denumTotal / gcd, numTotal / gcd];
}