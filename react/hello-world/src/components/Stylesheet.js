import React from 'react'
import './myStyles.css'
import styles from './myStyles.module.css'

function Stylesheet(props) {
    let className = props.name ? "main" : ""
    const heading = {
        fontSize:"25px",
        color: "orange"
    }
  return (
    <div>
        <h1 className= {`${className} font-xl`}>My Stylesheet</h1>
        <h2 className= {styles.error}> my module css</h2>
        <h3 style= {heading}>my inline css</h3>
    </div>
  )
}

export default Stylesheet