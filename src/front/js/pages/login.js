import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/todos.css";

export const LogIn = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [passwordType, setPasswordType] = useState('password');
    const [view, setView] = useState(false);
    const [user, setUser] = useState({username: '', password: ''})

    const viewPassword = () => {
        setPasswordType('text');
        setView(true);
    };
    const hidePassword = () => {
        setPasswordType('password');
        setView(false);
    };
    const handleLogIn = () => {
        console.log(user);
        actions.userSignIn(user)
        navigate("/")

    }
   
    return(
        <div className="container">
            <form>
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input
                        className="form-control"
                        name="username"
                        placeholder="Enter Username"
                        aria-label="Enter Username"
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}>
                    </input>
                    <div className="form-text">
                        Your username is the email associated with your account.
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="password"
                            type={passwordType}
                            placeholder="Enter Password"
                            aria-label="Enter Password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}>
                        </input>
                        { view ? 
                        <button className="btn btn-light" type="button" id="button-addon2" onClick={hidePassword}>
                            <i className="fa-solid fa-eye-slash"></i>
                        </button> :
                        <button className="btn btn-light" type="button" id="button-addon2" onClick={viewPassword}>
                            <i className="fa-solid fa-eye" id="togglePassword"></i>
                        </button>
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn" type="button" onClick={handleLogIn}>Log In</button>
                </div>
            </form>
        </div>
    )
}