import React from "react"

const Goodbye = () => {
    // return (
    //     <div>
    //         <p>Thank you for attending my jelly talk :p</p>
    //     </div>
    //  )
    return React.createElement(
        "div",
         {id: "goodbye", className: "dummyClass"},
        React.createElement("h3", null, "Thank you for attending my jelly talk :D")
    )
}
export default Goodbye

export const Kittys = () => <p>I have three cats; Kevin, Baby, Japser.</p>