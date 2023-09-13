function solution(myString, pat) {
    const arr = [...myString].map((x) => (x === "A" ? "B" : "A")).join("")
    return arr.includes(pat) ? 1 : 0
}