// **** Soal no 2 
    
function checkPalindrome(inputString) { // 
    let strArray = inputString.split(''); //array //kodok
    let newArr = strArray.join(''); // string
    let revArr =  [...newArr].reverse().join('') //string
   console.log(newArr)
    
    if ( newArr === revArr) {
        return true;
    } else {
        return false;
    }
}


let a = "kodok"
let b = "nenek"
let c = "ketek"

console.log(checkPalindrome(a))
// console.log(checkPalindrome(b))
// console.log(checkPalindrome(c))