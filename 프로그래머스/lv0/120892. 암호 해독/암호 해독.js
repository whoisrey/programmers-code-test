function solution(cipher, code) {
    return [...cipher].filter((ele, idx) => (idx + 1) % code === 0).join('');
}