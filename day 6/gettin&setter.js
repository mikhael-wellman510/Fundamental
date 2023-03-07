let user = {
    firstName: 'mikhael',
    lastName: 'wellman',

    get fullName(){
        return `hallo ${this.firstName} ${this.lastName}`;
    },

    set fullName(value){
        const splittedValues = value.split(' '); //  membuat array ['alice' , 'copper']
        this.firstName = splittedValues[0]; // array index 0 = alice
        this.lastName = splittedValues[1]; // array index 1 = cooper

        
    },
};


user.fullName = 'Alice Cooper'; // untuk assignment 

console.log(user.firstName); 
console.log(user.lastName);
console.log(user.fullName); // panggil get fullName