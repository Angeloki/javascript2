export function outputToElement(elementID, value, color){
    document.getElementById(elemntID).innerHTML = value;
    if(color){
        document.getElementById(elementID).style.color = color;
    }else{
        document.getElementById(elementID).style.color = "inherit"
    }
}