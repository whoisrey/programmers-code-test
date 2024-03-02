function solution(name, yearning, photo) {
    let obj = new Object()
    for(let i = 0; i < name.length; i++){
        obj[name[i]] = yearning[i]
    }
    for(let i of photo){
        for(let j = 0; j < i.length; j++){
            i[j] = obj[i[j]]
            if(isNaN(i[j])) i[j] = 0
        }
    }    
    for(let i = 0; i < photo.length; i++){
        photo[i] = photo[i].reduce((a, b) => a + b)
    }
    return photo
}