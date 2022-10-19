import React, {useState} from "react"

const Greetings =() =>{
    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = () => {
        setChangedText(true)
    }

    return(
    <div>
        <p>I love my kitty</p>
        {!changedText && <p>Jasper</p>}
        {changedText && <p>Kevin</p>}
        <button onClick = {changeTextHandler}>Change Cat!</button>
    </div>
    )
}

export default Greetings