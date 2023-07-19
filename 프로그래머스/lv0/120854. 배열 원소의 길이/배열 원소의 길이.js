function solution(strlist) {
    var answer = [];
    for (let i = 0; i < strlist.length; i++){
        let arr = strlist[i].split("");
        answer[i] = arr.length;
    }
    return answer;
}