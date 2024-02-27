function solution(arr1, arr2) {
    let answer = arr1.map((v, rowIndex) => v.map((va, colIndex) => va + arr2[rowIndex][colIndex]))
    // for(let i = 0; i < arr1.length; i++){
    //     for(let j = 0; j < arr1.length; j++){
    //         console.log(arr1[i][j], arr2[i][j])
    //         // answer[i][j] = []
    //         // answer[i][j] = arr1[i][j] + arr2[i][j]
    //     }
    // }
    return answer
    
//     arr1[0][0] + arr2[0][0] = answer[0][0]
//     arr1[0][1] + arr2[0][1] = answer[0][1]
//     arr1[1][0] + arr2[1][0] = answer[1][0]
//     arr1[1][1] + arr2[1][1] = answer[1][1]
    
//     arr1[0][0] + arr2[0][0] = answer[0][0]
    
    
    
//     return answer
}