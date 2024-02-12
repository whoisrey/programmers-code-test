function solution(id_pw, db) {
    let array = []
    for(let i = 0; i < db.length; i++){
        if(id_pw[0] === db[i][0]){
            if(id_pw[1] === db[i][1]){
                array.push(2)
            }
            if(id_pw[1] !== db[i][1]){
                array.push(1)
            }
        } else {
            array.push(0)
        }
    }
    if(array.includes(2)) return "login"
    if(array.includes(1)) return "wrong pw"
    if(!array.includes(2) && !array.includes(1)) return "fail"
}