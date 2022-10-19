/*const myName = name => name;
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
shep1.run();*/
// inheriting class

const myPromise = new Promise(function(myResolve, myReject){
    setTimeout(function(){myResolve("keep up the good work!")}, 3000)
})

myPromise.then(function(value){
    console.log(value);
})

async function myFunction(){
    console.log("hello Team");
}
myFunction().then(
    function(value){}
)

async function myDisplay(){
    let myPromise= new Promise(function(resolve){
        setTimeout(function(){resolve("you are almost there")}, 6000);
    })
    console.log(await myPromise);

}

myDisplay();

let myArr= [2, 4, 6, 8]
const myMap= myArr.map(num => num * 2);
console.log(myMap);