function solution(my_string, is_prefix) {
    return (my_string.split(is_prefix))[0] === "" ? 1 : 0
}