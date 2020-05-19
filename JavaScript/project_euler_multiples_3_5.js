/*
FUNC multiples takes a number
    
ENDFUNC
*/

function multiples(num) {
    let sum = 0
    for(i=0; i < num; i++){
        if(i % 5 == 0 || i % 3 == 0){
            sum += i
        }
    }
    return sum
}

console.log(multiples(10))