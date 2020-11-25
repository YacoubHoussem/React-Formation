import { Button } from "@material-ui/core";
import { useState } from "react";

export default function TodoForm(props) {
  /*const today = new Date()
        const strToday  = today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate()

        /*let initFormState = {
            title:"le titre",
            dueDate:strToday,
            completed:false,
    }

    let [formState, setFormState] = useState(initFormState)

    let handleInputChange = (event) => {
       const target = event.target;
       const name = target.name;
       const value = target.type === 'checkbox' ? target.checked : target.value
    
       setFormState({...formState, [name]:value})
    }

    let handleFormSubmit = async (event) => {
       event.preventDefault()
       const response = await fetch(process.env.REACT_APP_TODOS_URL,{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
              },    
              body:JSON.stringify(formState)
        })
        console.log(response.status)
    }*/

  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={props.formState.title}
          onChange={props.handleInputChange}
        />
        <input
          type="date"
          name="dueDate"
          placeholder="date"
          value={props.formState.dueDate}
          onChange={props.handleInputChange}
        />
        <input
          type="checkbox"
          name="completed"
          checked={props.formState.completed}
          onChange={props.handleInputChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onChange={props.handleFormSubmit}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
