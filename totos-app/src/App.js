import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList'
function App() {
  return (
    <div className="App">
      <h1>Application 1</h1>
      <TodoList></TodoList>
      <TodoForm></TodoForm>
    </div>
  );
}

export default App;
