const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userToDos: {},
			userContacts: {},
			userMemos: {}
		},
		actions: {
			fetchAPI: async (url, method, body, app) => {
				try{
					const response = await fetch(url, {
						method: method,
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*'
						},
						body: body
					})
					const data = await response.json();
					if (response.status === 200 && app === "ToDos"){
						console.log(data.todos)
						setStore({userToDos: data.todos})
						console.log(getStore().userToDos)
						return true;
					};
					if (response.status === 200 && app === "Contacts"){
						console.log(data.contacts)
						setStore({userContacts: data.contacts})
						console.log(getStore().userContacts)
						return true;
					};
				} catch (error) {
					console.error(`There was a problem with the fetch operation ${error}`)
				}
			},
			fetchUserToDos: async () => {
				const url = `${process.env.BACKEND_URL}/api/todos`;
				const method = 'GET';
				const body = undefined;
				const app = "ToDos"
				getActions().fetchAPI(url, method, body, app)
			},
			addUserToDos: async (task) =>{
				const url = `${process.env.BACKEND_URL}/api/todos`;
				const method = 'POST';
				const body = JSON.stringify({
					'task': task,
					'status': 'Not Started'
				});
				const app = "ToDos"
				getActions().fetchAPI(url, method, body, app)
			},
			deleteUserToDos: async(todoID) =>{
				const url = `${process.env.BACKEND_URL}/api/todos/${todoID}`;
				const method = 'DELETE';
				const body = undefined;
				const app = "ToDos"
				getActions().fetchAPI(url, method, body, app)
			},
			// fetchUserToDos: async () => {
			// 	const opts = {
			// 		method: 'GET',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 			'Access-Control-Allow-Origin': '*',
			// 			// 'Authorization': `Bearer ${sessionStorage.token}`
			// 		}
			// 	} 
			// 	try {
			// 		const resp = await fetch(`${process.env.BACKEND_URL}/api/todos`, opts);
			// 		const data = await resp.json();
			// 		if (resp.status === 200) {
			// 			console.log(data.todos)
			// 			setStore({userToDos: data.todos})
			// 			console.log(getStore().userToDos)
			// 			return true;
			// 		} else {
			// 			console.error(`Unexpected error: ${data.message}`)
			// 		}
			// 	} catch (error) {
			// 		console.error(`There was a problem with the fetch operation ${error}`)
			// 	}
			// },
			// addUserToDos: async (task) => {
			// 	const opts = {
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 			'Access-Control-Allow-Origin': '*',
			// 		},
			// 		body: JSON.stringify({
			// 			"task": task,
			// 			"status": "Not Started"
			// 		})
			// 	}
			// 	try{
			// 		const resp = await fetch(`${process.env.BACKEND_URL}/api/todos`, opts);
			// 		const data = await resp.json();
			// 		if (resp.status === 200) {
			// 			console.log(data.todos)
			// 			setStore({userToDos: data.todos})
			// 			console.log(getStore().userToDos)
			// 			return true;
			// 		} else {
			// 			console.error(`Unexpected error: ${data.message}`)
			// 		}
			// 	} catch (error) {
			// 		console.error(`There was a problem with the fetch operation ${error}`)
			// 	}
			// },
			// deleteUserToDos: async (todoID) => {
			// 	const opts = {
			// 		method: 'DELETE',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 			'Access-Control-Allow-Origin': '*',
			// 		}
			// 	}
			// 	try{
			// 		const resp = await fetch(`${process.env.BACKEND_URL}/api/todos/${todoID}`, opts);
			// 		const data = await resp.json();
			// 		if (resp.status === 200) {
			// 			console.log(data.todos)
			// 			setStore({userToDos: data.todos})
			// 			console.log(getStore().userToDos)
			// 			return true;
			// 		} else {
			// 			console.error(`Unexpected error: ${data.message}`)
			// 		}
			// 	} catch (error) {
			// 		console.error(`There was a problem with the fetch operation ${error}`)
			// 	}
			// },
			editToDoStatus: async (todoID, status) => {
				const opts = {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
					body: JSON.stringify({
						'status': status
					})
				}
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/todos/${todoID}`, opts);
					const data = await resp.json();
					if (resp.status === 200) {
						console.log(data.todos)
						// setStore({userToDos: data.todos})
						// console.log(getStore().userToDos)
						return true;
					} else {
						console.error(`Unexpected error: ${data.message}`)
					}
				}
				catch (error) {
					console.error(`There was a problem with the fetch operation ${error}`)
				}
			},
			fetchUserContacts: async () => {
				const url = `${process.env.BACKEND_URL}/api/contacts`;
				const method = 'GET';
				const body = undefined;
				const app = "Contacts";
				getActions().fetchAPI(url, method, body, app)
			},
			addUserContacts: async (contact) => {
				const url = `${process.env.BACKEND_URL}/api/contacts`;
				const method = 'POST';
				const body = JSON.stringify({
					'firstName': contact.firstName,
					'lastName': contact.lastName,
					'phone': contact.phone,
					'email': contact.email,
					'address': contact.address
				});
				const app = "Contacts";
				getActions().fetchAPI(url, method, body, app)
			},
			editUserContact: async (contact, contactID) => {
				const url = `${process.env.BACKEND_URL}/api/contacts/${contactID}`;
				const method = 'PUT';
				const body = JSON.stringify({
					'firstName': contact.firstName,
					'lastName': contact.lastName,
					'phone': contact.phone,
					'email': contact.email,
					'address': contact.address
				});
				const app = "Contacts";
				getActions().fetchAPI(url, method, body, app)
			},
			deleteUserContact: async (contactID) => {
				const url = `${process.env.BACKEND_URL}/api/contacts/${contactID}`;
				const method = 'DELETE';
				const body = undefined;
				const app = "Contacts";
				getActions().fetchAPI(url, method, body, app)
			},
		}
	};
};

export default getState;
