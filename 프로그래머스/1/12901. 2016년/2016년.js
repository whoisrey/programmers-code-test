function solution(a, b) {
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let thirtyOne = [1, 3, 5, 7, 8, 10, 12]
    let thirty = [4, 6, 9, 11]
    let yoon = [2]
    let firstDay = [5]
    // let firstDay = [5,1,2,5,0,3,5,1,4,6,2,4]
    for(let i = 1; i <= 11; i++){
        if(thirtyOne.includes(i)){
            firstDay.push((firstDay[i - 1] + 3) % 7)
        } else if(yoon.includes(i)){
            firstDay.push((firstDay[i - 1] + 1))
        } else {
            firstDay.push((firstDay[i - 1] + 2) % 7)
        }
    }
    // return b - Math.floor(b / 7) * 7
    // return b % 7 - 1
    return day[(firstDay[a - 1] + (b - 1) % 7) % 7]
    // return day[(firstDay[a - 1] + (b % 7 - 1)) % 7]
    // return firstDay[a - 1] + (b % 7)
    // return day[firstDay[a - 1]]
    
    // if(thirtyOne.includes(a)){
    //     return day[b % 7]
    // }
    // 1/1 = fri 5
    // 1/31 = sun 0
    // 2/1 = mon 1
    // 2/29 = mon 1
    // 3/1 = tue 2
    // 3/31 = thu 4
    // 4/1 = fri 5
    // 4/30 = sat 6
    // 5/1 = sun 0
    // 5/31 = tue 2
    // 6/1 = wed 3
    // 6/30= thu 4
    // 7/1 = 
    // fri mon tue fri mon thu
}