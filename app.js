import { calculateCircumference, calculateArea, calculateSphereVolume } from "./circleCalculator.js";
import{convertToNumber} from "./validation.js";
import {outputElement, outputToElement} from "./display.js";

document.querySelector("#submitButton").addEventListener("click", function(){
    submitFunction("circumference");
}, false);
document.querySelector("#submitAreaButton").addEventListener("click", function(){
    submitFunction("area");
}, false);
document.querySelector("#submitAreaButton").addEventListener("click", function(){
    submitFunction("area");
}, false);

function submitFunction(calculationToMake){
    let outputId= "output", inputId= "radius";
    if(calculationToMake === "area"){
        outputId += "Area"
        inputId += "Area"
    }else if(calculationToMake === "volume"){
        inputId += "Volume"
        outputId += "Volume"
    }

    let radius = convertToNumber(document.getElementById(inputId).value);

    if(!radius){
        outputToElement(outputId, "Please enter a valid number", "red");
    }else{
        if(calculationToMake === "area"){
            outputToElement(outputId, `The area is ${calculateArea(radius)}`);
        }else if(calculationToMake === "volume"){
            outputToElement(outputId, `The Volume is ${calculateSphereVolume}`);
        
        }else(calculationToMake === "circumference"){
            outputToElement(outputId, `The circumference is ${calculateCircumference}`);
    }


}