// filter items by their completion status

import { useEffect } from 'react';

function TodoFilter({status, setStatus, todos, setFilteredTodos}) {

    function handleStatus(e){
        console.log(e.target.value)
        setStatus(e.target.value);
    }

    function handleFilter(){
        console.log("Hello", todos)
        if (status === 'completed'){
            setFilteredTodos(todos.filter(todo => todo.done === true))
        } else if (status === 'uncompleted'){
            setFilteredTodos(todos.filter(todo => todo.done === false))
        } else {
            setFilteredTodos(todos)
        }

    }

    // need useEffect as we want to-do list to render everytime filter is changed
    useEffect(() => {
        handleFilter()
    }, [todos, status]);
    
    return (
        <div className="select">
            <select name="todos" className="filter-todo" onChange={handleStatus}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    )
};

export default TodoFilter; 
