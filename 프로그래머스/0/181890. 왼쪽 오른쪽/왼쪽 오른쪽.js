function solution(str_list) {
    let blank = []
    for(let i = 0; i < str_list.length; i++){
        if(str_list[i] === "l"){
            return str_list.slice(0, i)
        } else if(str_list[i] === "r"){
            return str_list.slice(i + 1, str_list.length)
        } else if(!str_list.includes("l") && !str_list.includes("r")){
            return blank
        }
    }
}