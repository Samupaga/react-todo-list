import { useState } from 'react'
import './App.css';
import { TodoForm, TodoList, TodoFilter } from './components';

function App() {

  const [inputText, setInputText] = useState("");
  // inputText = initial state, setInputText = update the state

  const [todos, setTodos] = useState([]);

  const [status, setStatus] = useState('all');

  const [filteredTodos, setFilteredTodos] = useState([]);


  return (
      <div>
        <header>Samuele's Todo List</header>
        <TodoForm setInputText={setInputText} setTodos={setTodos} todos={todos} inputText={inputText}/>
        <TodoFilter setFilteredTodos={setFilteredTodos} status={status} setStatus={setStatus} todos={todos}/>
        <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
      </div>
    
  );
};

export default App
