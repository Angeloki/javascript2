import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Dad"
      }
    }

    greetParent = (childName) =>{
    alert(`Hello ${this.state.parentName} from ${childName}`)
} 
 render() {
    return (
      <div>
        <h1><ChildComponent greetHandler={this.greetParent}/></h1>
      </div>
    )
  }
}

export default ParentComponent