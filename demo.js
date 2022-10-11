const myName = name => name;
console.log(myName("angelica"));

const yourName = (name, message) => {
    let output = `${message} ${name}`;
    return output;
}
console.log(yourName("Hello", "Angelica"));
// arrow function

const bicycle = {
    color : "blue", 
    size : "small",
    ride(){
        console.log("you begin to ride");
    }
}
console.log(bicycle.color);
bicycle.ride();
//object can have as many properties

class dog{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    bark(){
        console.log("the dog has barked");
    }
}
let dog1 = new dog("oliver", "black and brown");
let dog2 = new dog ("rosco", "yellow");
//console.log(dog1.name);
//console.log(dog1.color);
//console.log(dog2.name);
//console.log(dog2.color);
// create new object with constructor within a class
class shepard extends dog{
    constructor(name, color){
        super(name, color);
    }
    run(){
        console.log("the shepard ran!");
    }
}

let shep1 = new shepard("bosco", "black");
console.log(shep1.name);
shep1.run();
// inheriting class