function solution(my_string, overwrite_string, s) {
    const strArr = my_string.split('')
    const overArr = overwrite_string.split('')
    const str = [];
    for(let i = s; i < s + overwrite_string.length; i++){
        strArr[i] = overArr[i - s]
    }
    return strArr.join('')
}