import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/todos.css";

export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate()
    const [user, setUser] = useState({email: '', name: '', password: ''})

    const handleSignUp = () => {
        actions.createUser(user);
        navigate('/login')
        
    }
   
    return(
        <div className="container">
            <form className="bg-light mt-3 py-2 px-3 border border-secondary-subtle rounded">
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Email</label>
                    <input
                        className="form-control"
                        name="username"
                        placeholder="Enter Email"
                        aria-label="Enter Email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}>
                    </input>
                    <div className="form-text">
                        This will be your username for future logins
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">First Name</label>
                    <input
                        className="form-control"
                        name="name"
                        placeholder="Enter First Name"
                        aria-label="Enter First Name"
                        value={user.name}
                        onChange={(e) => setUser({...user, name: e.target.value})}>
                    </input>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="password">Password</label>
                    <div className="input-group">
                        <input
                            className="form-control"
                            name="password"
                            type="text"
                            placeholder="Enter Password"
                            aria-label="Enter Password"
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}>
                        </input>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn" type="button" onClick={handleSignUp}>Create your Account</button>
                </div>
            </form>
        </div>
    )
}