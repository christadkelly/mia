import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ToDo = () => {
    const {store, actions} = useContext(Context);
    const [inputValue, setInputValue] = useState('');
    const createToDo = (e) => {
        if (e.key == "Enter" && inputValue != ''){
            actions.addUserToDos(inputValue)
            setInputValue('')
        }
    };

    useEffect(()=>{
        actions.fetchUserToDos()
    }, []);

    return(
        <div className="container">
            <h1>to-do's</h1>
            <ul>
                <li>
                    <input
                        className="input"
                        type="text"
                        placeholder="What needs to be done?"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={(e) => createToDo(e)}>
                    </input>
                </li>
                {store.userToDos && store.userToDos.length > 0 && store.userToDos.map((task, key) => 
                    (<li key={key}>
                        <label>{task.task}</label>
                        <select name="status" defaultValue={task.status}>
                            <option value='Not Started'>Not Started</option>
                            <option value='In progress'>In progress</option>
                            <option value='Finished'>Finished</option>
                        </select>
                        <button>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button onClick={() => actions.deleteUserToDos(task.id)}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </li>)
                )}
            </ul>
        </div>
    )
}