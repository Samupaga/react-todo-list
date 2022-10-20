// want to display the items that are submitted - make a list
// these items come from the Todo folder
import Todo from '../todo';

function TodoList ({todos, setTodos, filteredTodos}) {

    // need to call filteredTodos as that is where the filtered items are stored
    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {filteredTodos.map((todo, index) => (
                    <Todo key={index} todo={todo} todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
                ))} 
            </ul>
        </div>
    )
};

export default TodoList;
