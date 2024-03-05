const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userToDos: {},
			userContacts: {},
			userMemos: {},
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
						setStore({userToDos: data.todos})
						return true;
					};
					if (response.status === 200 && app === "Contacts"){
						setStore({userContacts: data.contacts})
						return true;
					};
					if (response.status === 200 && app === "Memos"){
						setStore({userMemos: data.memos})
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
						// setStore({userToDos: data.todos})
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
			addUserContact: async (contact) => {
				const url = `${process.env.BACKEND_URL}/api/contacts`;
				const method = 'POST';
				const body = JSON.stringify({
					'name': contact.name,
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
					'name': contact.name,
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
			fetchUserMemos: async () => {
				const url = `${process.env.BACKEND_URL}/api/memos`;
				const method = 'GET';
				const body = undefined;
				const app = "Memos";
				getActions().fetchAPI(url, method, body, app)
			},
			addUserMemo: async (memo) => {
				const url = `${process.env.BACKEND_URL}/api/memos`;
				const method = 'POST';
				const body = JSON.stringify({
					'title': memo.title,
					'memo_body': memo.body
				});
				const app = "Memos";
				getActions().fetchAPI(url, method, body, app)
			},
			editUserMemo: async (memo) => {
				const url = `${process.env.BACKEND_URL}/api/memos/${memo.id}`;
				const method = 'PUT';
				const body = JSON.stringify({
					'title': memo.title,
					'memo_body': memo.body
				});
				const app = "Memos";
				getActions().fetchAPI(url, method, body, app)
			},
			deleteUserMemo: async (memoID) => {
				const url = `${process.env.BACKEND_URL}/api/memos/${memoID}`;
				const method = 'DELETE';
				const body = undefined;
				const app = "Memos";
				getActions().fetchAPI(url, method, body, app)
			},
			createUser: async (user) => {
				const url = `${process.env.BACKEND_URL}/api/user/new`;
				const method = 'POST';
				const body = JSON.stringify({
					'name': user.name,
					'email': user.email,
					'password': user.password
				});
				const app = undefined;
				getActions().fetchAPI(url, method, body, app)
			},
			userSignIn: async (user) => {
				const url = `${process.env.BACKEND_URL}/api/user`;
				const method = 'GET';
				const body = JSON.stringify({
					'username': user.username,
					'password': user.password
				});
				const app = undefined;
				getActions().fetchAPI(url, method, body, app)
			}
		}
	};
};

export default getState;