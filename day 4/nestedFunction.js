function getMessage(firstName){
    function sayHello(){
        return `hello ${firstName}`
    }
    function welcomeMessage(){
        return `welcome to purwadhika`
    }

    return sayHello() + ' ' + welcomeMessage() 
}

const message = getMessage('mikhael');

console.log(message)

