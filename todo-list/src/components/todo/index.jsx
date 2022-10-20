// here we deal with individual todos set by user

function Todo({todo, todos, setTodos}) {

    function handleDelete(){
        setTodos(todos.filter(el => el !== todo)) // keep items that have id != to id of todo item clicked
    }

    function handleComplete(){
        setTodos(todos.map((item) => {
            if (item === todo){
                return {
                    ...item, 
                    done: !item.done
                }
            }
            return item;
        }))
        
    }; 

    return (
        <div className="todo-container">
            <li className={`todo-item ${todo.done ? 'done': ''}`}>{todo.text}</li>
            <button className="compBtn" onClick={handleComplete}>Completed</button>
            <button className="remBtn" onClick={handleDelete}>Remove</button>
        </div>
    )
};

export default Todo;
