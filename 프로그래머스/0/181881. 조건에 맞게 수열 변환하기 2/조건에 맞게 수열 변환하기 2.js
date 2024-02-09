function solution(arr) {
    let num = 0;
    let prev = [...arr]
    
    while(true){
        const next = prev.map((v) => {
            if(v >= 50 && v % 2 === 0){
                return v / 2
            } 
            if(v < 50 && v % 2 === 1){
                return v * 2 + 1
            }
        return v;
        })
    
        const isEqual = prev.every((v, i) => v === next[i]);
        if(isEqual) break
        prev = next
        num++;
    }
    return num
}

// function solution(arr) {
//     let x = 0;
//     let prev = [...arr];

//     while (true) {
//         const next = prev.map((item) => {
//             if (item >= 50 && item % 2 === 0) {
//                 return item / 2;
//             }
//             if (item < 50 && item % 2 === 1) {
//                 return item * 2 + 1;
//             }

//             return item;
//         });

//         const isEqual = prev.every((item, idx) => item === next[idx]);

//         console.log(isEqual);

//         if (isEqual) break;
//         prev = next;
//         x++;

//         console.log('arr, prev, next : ', arr, prev, next)
//     }

//     return x;
// }