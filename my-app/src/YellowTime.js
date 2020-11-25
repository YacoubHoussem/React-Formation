import  React from "react"

export default function YellowTime(props){

    const st = {
        backgroundColor:props.theDate.getSeconds()%2==0?"yellow":"lightblue"
                }
    return(
        <span style={st} >{props.theDate.toLocaleTimeString()}</span>
    )
}