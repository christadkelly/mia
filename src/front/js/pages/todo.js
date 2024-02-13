import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ToDo = () => {
    const {store, actions} = useContext(Context);

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
            </ul>
        </div>
    )
}