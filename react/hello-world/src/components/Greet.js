import React, {useState} from "react";

/*function Greet(){
    return <h1>Hello Angelica!</h1>
}*/

//const Greet = () => <h1>Hello World!</h1>

/*export const Greet = () => {
    return React.createElement("h1", null, "Hello Angelica and World!")
}*/

//export const Hello = () => <h1>Hello Class!</h1>



//export default Greet

/*const Greet = props =>{
    const{name, heroName}= props
    return(
        <div>
            <h1> Hello {name} a. k. a {heroName}</h1>
            
        </div>
    )
}*/

const Greet = () => {
    const [changedText, setChangedText] = useState(false)
    const changeTextHandler = () => {
        setChangedText(true)
    }

    return(
        <div>
            <h1>Hello World!</h1>
            {!changedText && <p>Its good to see you</p>}
            {changedText && <p>changed!</p>}
            <button onClick = {changeTextHandler}>Change State</button>
        </div>
    )
}
//stateful functional compoment
export default Greet