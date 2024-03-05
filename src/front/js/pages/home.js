import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/contacts.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const nagivate = useNavigate();

	return (
		<div className="container">
			<div className="notebook">
				<div className="text-center mb-5">
					<h1 className="m-2">Welcome to miaa</h1>
					<h4>a memory and information assistant app</h4>
					<h6>Let us help you remember all the things you need to remember with one of our helpful tools. See what we have to offer below!</h6>
				</div>
				<div className="row p-1 m-1">
					<div className="col-lg-4 col-12 text-center">
						<h3>Todo List</h3>
						<p className="text-start">
							Create a dynamic todo list! Add your tasks and track their status!
							Were you interrupted in the middle of the task? Update the task status to in progress.
							Or finish a task and enjoy the satisfaction of a task well done by changing the status to finished (and then waiting a bit to actually remove it from your list)!
						</p>
						<button className="btn mb-2" type="button" onClick={() => nagivate('/todos')}>Go to ToDo List</button>
					</div>
					<div className="col-lg-4 col-12 text-center">
						<h3>Contacts</h3>
						<p className="text-start">
							Keep track of your contacts with our simple contact list! Add your contacts' information and always have it at the ready.
							Our contact list app keeps all your contacts in one, easily organized, easily accessible location!
						</p>
						<button className="btn mb-2" type="button" onClick={() => nagivate('/contacts')}>Go to Contacts</button>
					</div>
					<div className="col-lg-4 col-12 text-center">
						<h3>Memos</h3>
						<p className="text-start">
							Need a place to jot down a quick idea? Need to write a quick reminder for yourself? Tired of loosing important information on sticky notes?
							Try our memo feature! Built to work for you, these memos can organize any information- information with no details or with a lot of details.
							They are free-form to better suit your needs!
						</p>
						<button className="btn mb-2" type="button" onClick={() => nagivate('/memos')}>Go to Memos</button>
					</div>
				</div>
			</div>
			
			<div>
				
				
				
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
