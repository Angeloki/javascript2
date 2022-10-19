import React from 'react'

function ChildComponent(props) {
  return (
    
        <button onClick={() => props.greetHandler("Angelica")}>Greet Parent</button>
    
  )
}

export default ChildComponent