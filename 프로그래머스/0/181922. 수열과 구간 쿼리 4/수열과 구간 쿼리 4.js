function solution(arr, queries) {
    for(let i = 0; i < queries.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(queries[i][0] <= j && j <= queries[i][1]){
                if(j % queries[i][2] === 0){
                    arr[j] = arr[j] + 1
                }
            }
        }
    }
    return arr
}

// 0 <= i <= 4
// i % 1 === 0
// 0 1 2 3 4 

// 0 <= i <= 3
// i % 2 === 0
// 2 

// 0 <= i <= 3
// i % 3 === 0
// 3