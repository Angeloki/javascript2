import React from "react";

/*function Greet(){
    return <h1>Hello Angelica!</h1>
}*/

//const Greet = () => <h1>Hello World!</h1>

export const Greet = () => {
    return React.createElement("h1", null, "Hello Angelica and World!")
}

export const Hello = () => <h1>Hello Class!</h1>



//export default Greet