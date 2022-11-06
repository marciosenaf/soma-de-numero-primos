//todos numero primos de 0 a 1000

// numbers(1000);
    
// function numbers(limit){
//     for (let number = 2; number <= limit; number++){
//     if(primenumber(number))console.log(number);
//     }
// }

// function primenumber(number){
//     for(let division = 2; division < number; division++){
//         if(number % division === 0){
//             return false;
//         }
//     }
//     return true;
// }


//todos os numeros primos somados de 0 a 1000
console.log(numbers(1000));

function numbers(limit){
    var arr = []  
    var soma = 0

    for (let number = 2; number <= limit; number++){
        const result = primenumber(number)
    if(result){
    soma += number    
    }
    }
    return(soma)
}

function primenumber(number){
    for(let division = 2; division < number; division++){
        if(number % division === 0){
            return false;
        }
    }
    return true;
}


