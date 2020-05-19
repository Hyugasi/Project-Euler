/*
FUNC multiples takes a number
    
ENDFUNC
*/

function multiples(num) {
    let sum = 0
    for(i=0; i < num; i++){
        if(i % 5){
            sum += 5
        }else if(i % 3){
            sum += 3
        }
    }
    return sum
}

console.log(multiples(1000))