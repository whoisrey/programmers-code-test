function solution(rsp) {
    var answer = '';
    var temp = {2:'0', 0:'5', 5:'2'}
    
    answer = rsp.split('').map(a =>(temp[a])).join("");
    
    return answer;
}