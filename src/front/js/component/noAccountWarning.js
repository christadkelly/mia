import React from "react";
import { useNavigate } from "react-router-dom";

export const NoAccountWarning = () =>{
	const navigate = useNavigate();

    return(
        <div className="alert alert-warning mt-1 text-center alert-dismissible" role="alert">
            <p>
                If you don't create an account or log in, your information will not be saved.
            </p>
            <button className="btn btn-outline-secondary" onClick={() => navigate('/signup')}>Create an Account!</button>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}