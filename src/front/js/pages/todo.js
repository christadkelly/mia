import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ToDo = () => {
    const {store, actions} = useContext(Context);

    useEffect(()=>{
        actions.fetchUserToDos()
    }, [])

    return(
        <div className="container">
            <h1>to-do's</h1>
            <ul>
                <li>
                    <input
                        className="input"
                        type="text"
                        placeholder="What needs to be done?">
                    </input>
                </li>
                {store.userToDos && store.userToDos.length > 0 && store.userToDos.map((task, key) => 
                    (<li key={key}>
                        <span className="hide">
                            <i className="fa-solid fa-eraser"></i>
                        </span>
                        <label>{task.task}</label>
                        {/* <select name="status">
                            <option value='Not Started'>Not Started</option>
                            <option value='In progress'>In progress</option>
                            <option value='Done'>Done</option>
                        </select> */}
                    </li>)
                )}
            </ul>
        </div>
    )
}