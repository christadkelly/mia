import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(()=> {
		if (sessionStorage.token){
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, [sessionStorage.token])

	const handleLogout = () => {
		actions.userLogOut();
		setLoggedIn(false);
		navigate('/');
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light border border-secondary-subtle border-3">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					miaa
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>
    			<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
      				<ul className="navbar-nav">
						<li className="nav-item d-flex">
							<i className="fa-solid fa-thumbtack"></i>
							<Link className="nav-link ms-2" to={"/contacts"}>Contacts</Link>
						</li>
						<li className="nav-item d-flex">
							<i className="fa-solid fa-thumbtack"></i>
							<Link className="nav-link ms-2" to={"/todos"}>To-Do List</Link>
						</li>
						<li className="nav-item d-flex">
							<i className="fa-solid fa-thumbtack"></i>
							<Link className="nav-link ms-2" to={"/memos"}>Memos</Link>
						</li>
						{loggedIn && ( 
							<li className="nav-item dropdown d-flex">
								<i className="fa-solid fa-thumbtack"></i>
								<a className="nav-link dropdown-toggle ms-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Settings
								  </a>
								  <ul className="dropdown-menu">
									<li><a className="dropdown-item" href="#">Account Settings</a></li>
									<li><a className="dropdown-item" href="#">Logout</a></li>
								  </ul>
							</li>
						)}
      				</ul>
    			</div>
				{!loggedIn && (
					<div className="justify-content-end">
						<button className="btn" onClick={() => navigate('/signup')}>Sign Up</button>
						<button className="btn" onClick={() => navigate('/login')}>Log In</button>
					</div>
				)}
			</div>
		</nav>
	);
};
