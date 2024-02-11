const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    result = []
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() !== str[i]){
            result.push(str[i].toUpperCase())
        } 
        if(str[i].toLowerCase() !== str[i]){
            result.push(str[i].toLowerCase())
        }
    }
    console.log(result.join(''))
});