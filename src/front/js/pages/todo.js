import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/todos.css";

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
            <div className="listpad">
                <h1 >to-do's</h1>
                <div className="list">
                    <div>
                        <input
                            className="input"
                            type="text"
                            placeholder="What needs to be done?"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => createToDo(e)}>
                        </input>
                    </div>
                    {store.userToDos && store.userToDos.length > 0 && store.userToDos.map((task, key) => 
                        (<div key={key} className="row pt-2">
                            <label className="col-8">{task.task}</label>
                            <select className="col-3" name="status" defaultValue={task.status} 
                            onChange={(e) => actions.editToDoStatus(task.id, e.target.value)}
                            >
                                <option value='Not Started'>Not Started</option>
                                <option value='In progress'>In Progress</option>
                                <option value='Finished'>Finished</option>
                            </select>
                            <span className="col-1 d-flex justify-content-end">
                                <button onClick={() => actions.deleteUserToDos(task.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </span>
                        </div>)
                    )}
                </div>
            </div>
        </div>
    )
}