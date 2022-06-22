import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
                return item;
            })
        );
    };
    const updateHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                let re =  prompt("ingin merubah data menjadi?");
                if(re===null){
                re=todo.text
                item.text = re; 
                }
            item.text = re;
            return item;
            }
            return item;
            })
        );
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : "w"}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={() => updateHandler(todos.id)} className="update-btn">
                <i className="fas">Update</i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;