function solution(date1, date2) {
    const firstYear = date1[0]
    const secondYear = date2[0]
    const firstMonth = date1[1]
    const secondMonth = date2[1]
    const firstDay = date1[2]
    const secondDay = date2[2]
    if(firstYear > secondYear){
        return 0
    } else if(firstYear < secondYear){
        return 1
    } else {
        if(firstMonth > secondMonth){
            return 0
        } else if(firstMonth < secondMonth){
            return 1
        } else {
            if(secondDay - firstDay > 0){
                return 1
            } else {
                return 0
            }
        }
    }
}