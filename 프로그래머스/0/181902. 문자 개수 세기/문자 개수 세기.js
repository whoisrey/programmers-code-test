function solution(my_string) {
    let answer = Array(52).fill(0);
    // 앞 26 대문자, 뒤 26 소문자
    [...my_string].forEach((str, idx) => {
        const charCode = my_string.charCodeAt(idx);

        // 대문자 A-Z 인 경우
        if (charCode >= 65 && charCode <= 90) {
            console.log('charCode >= 65 대문자', str)

            answer[charCode - 65] += 1;
        }
        // 소문자 a-z 인 경우
        else if (charCode >= 97 && charCode <= 122) {
            console.log('charCode >= 97 소문자', str)

            answer[charCode - 97 + 26] += 1;
        }
    });

    return answer;
}