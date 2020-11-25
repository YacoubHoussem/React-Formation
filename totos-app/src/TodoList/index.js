import React, { useState,useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';



const columns = [
    { field: 'id' , width:50},
    { field: 'title', width: 500},
    { field: 'dueDate', width: 200},
    { filed: 'completed', width: 100}
  ];

  const rows = [
    { id: 1, title: 'Snow', dueDate: 35 },
  ];

  
  
export default function TodoList(){
    let [todos,setTodos]= useState([]);

    useEffect(() => {
        
        fecthTodos()
        
     },[]);
       
        async function fecthTodos(){
       const response   = await fetch(process.env.REACT_APP_TODOS_URL)
       const data = await response.json()
            //.then(response => response.json()) remplace notre than async et await 
            //.then(data => {
        setTodos(data)
        }
        
            //})
    
    const deleteTodo = async (todo) => {
        const url_delete = `${process.env.REACT_APP_TODOS_URL}/${todo.id}`
        const response = await fetch(url_delete,{method:'DELETE'})
        fecthTodos()

        console.log(response.status)
        console.log(response.statusText)
        //const tmp_todos = todos.filtre(item => item.id !== todo.id)
        //setTodos(tmp_todos)
    }

    return(
    <div>
        <h2>TodoList</h2>
        <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>dueDate</th>
            <th>Completed</th>
            <th></th>
          </tr>
        </thead>
        <tbody>

          {todos.map(todo => 
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.dueDate}</td>
              <td>{todo.completed}</td>
              <td>
                <Button variant="contained" color="secondary" onClick={() => deleteTodo(todo)}>Delete</Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
        <br>
        </br>
        <div style={{ height: 1000, width: '100%' }}>
            <DataGrid rows={todos} columns={columns} pageSize={10} checkboxSelection />
        </div>
    </div>
    )
}