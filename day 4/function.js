// FUNCTION DECLARATION
function square(a){

    return (a*a).toLocaleString()
}

console.log(square(100000))

// ARROW FUNCTION // FUNCTION EXPRESSION

const func = (a) => a * a

console.log(func(3))


// CURRY

function multiplier(factor){
    return function (number){
        return number*factor
    }


}

const mul3 = multiplier(3);
const mul5 = multiplier(5);

