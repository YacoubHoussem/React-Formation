import  React from "react"

export default class WelcomeClass extends React.Component {

    render(){
         return <h1>
            Bonjour, {this.props.name}</h1>
    }

}