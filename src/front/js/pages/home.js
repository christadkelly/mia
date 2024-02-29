import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const nagivate = useNavigate();

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<div>
				<button className="btn btn-primary" type="button" onClick={() => nagivate('/contacts')}>Go to Contacts</button>
				<button className="btn btn-primary" type="button" onClick={() => nagivate('/todos')}>Go to ToDo List</button>
				<button className="btn btn-primary" type="button" onClick={() => nagivate('/memos')}>Go to Memos</button>
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
