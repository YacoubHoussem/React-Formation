import  React from 'react'


export default class IncDec extends React.Component{
    constructor(props){
        super(props)
        this.state = {cpt : 0,
        values:[0]};
    }
    inc(){
        this.setState(state => {
            const tmp = state.values
            tmp.push(state.cpt)
            return {cpt:state.cpt+1} 
        }) 
    }

    dec(){
        this.setState(state => {
            const tmp = state.values
            tmp.push(state.cpt)
            return {cpt:state.cpt+1} 
        }) 
    }
     //comment pour les events d'un boutton c'est dans le page de parametre on fais appelle a notre fonction 
    render(){
        const cpt = this.state.cpt;
    const liValues = this.state.values.map(value => <li key={value.toString()}>{value}</li>)
        console.log("liValues")
        return(
            <div>
                <button onClick={ () => this.inc()}> + </button>
                <span>{cpt}</span>
                <button onClick={ () => this.dec()}> - </button>
                <hr/>
                <ul>{liValues}</ul>
            </div>
        )
    }
}