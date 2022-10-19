import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const{name, heroName} = this.props
        return <h2> Welcome {name} a. k. a {heroName}</h2>
    }
}

export default Welcome