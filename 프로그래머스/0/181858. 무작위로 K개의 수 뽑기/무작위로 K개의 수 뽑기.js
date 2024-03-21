function solution(arr, k) {
    const set = new Set();
    const answer = [];

    for (const num of arr) {
        if (!set.has(num)) {
            answer.push(num);
            set.add(num);
            if (answer.length === k) break;
        }
    }

    while (answer.length < k) {
        answer.push(-1);
    }

    return answer;
}
