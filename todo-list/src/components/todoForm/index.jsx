// give user somewhere to input their todos


function TodoForm({inputText, setInputText, todos, setTodos}) {

    function handleInput(e){
        // want to update state with what is added to input form
       setInputText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();

        setTodos([
            ...todos, 
            {
                text: inputText, 
                done: false
            }
        ])
        setInputText(''); // make input box empty once an item has been added
    }

    // need to add value={inputText} in input element as we want array to have value of what is added by user
    return (
        <form>
            <input onChange={handleInput} value={inputText} type="text" placeholder="Enter something to do" className="todo-input"></input>
            <button onClick={handleSubmit} type="submit" className="todo-button">Add</button>
        </form>
    )
}

export default TodoForm;
