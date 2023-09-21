function solution(arr1, arr2) {
    const firstArr = arr1.length
    const secondArr = arr2.length
    const firstSum = arr1.reduce((a, b) => a + b)
    const secondSum = arr2.reduce((a, b) => a + b)
    if(firstArr > secondArr) {
        return 1;
    }
    else if(firstArr < secondArr) {
        return -1;
    }
    else {
        if(firstSum > secondSum){
            return 1;
        }
        else if(firstSum < secondSum){
            return -1;
        }
        else {
            return 0;
        }
    }
}