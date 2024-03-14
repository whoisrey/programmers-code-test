function solution(rank, attendance) {
    let attend = []
    let obj = {}
    for(let i = 0; i < rank.length; i++){
        obj[rank[i]] = i
    }
    // obj
    // key = 순위
    // value = 번호
    let arr = []
    // let keys = Object.keys(obj)
    // return obj
    for(let i = 1; i < rank.length + 1; i++){
        if(attendance[obj[String(i)]] === true){
            arr.push(obj[String(i)])
        }
    }
    return 10000 * arr[0] + 100 * arr[1] + arr[2]
}