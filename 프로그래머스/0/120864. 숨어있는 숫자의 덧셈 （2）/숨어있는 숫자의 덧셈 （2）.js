function solution(my_string) {
    const regex = /\d+/g;
    const matches = my_string.match(regex);

    if (!matches) {
        return 0;
    }
    return matches.reduce((acc, curr) => acc + parseInt(curr), 0);
}