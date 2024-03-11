const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userToDos: [],
			userContacts: [],
			userMemos: [],
			userName: [],
			loggedIn: false,
			idCounter: 0
		},
		actions: {
			fetchAPI: async (url, method, body, app) => {
				try{
					const response = await fetch(url, {
						method: method,
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Allow-Origin': '*',
							'Authorization': `Bearer ${sessionStorage.token}`
						},
						body: body
					})
					const data = await response.json();
					if (response.status === 200 && app === "ToDos"){
						setStore({userToDos: data.todos});
						console.log(getStore().userToDos)
						return true;
					};
					if (response.status === 200 && app === "Contacts"){
						setStore({userContacts: data.contacts});
						return true;
					};
					if (response.status === 200 && app === "Memos"){
						setStore({userMemos: data.memos});
						return true;
					};
					if (response.status === 200 && app === "signIn"){
						sessionStorage.setItem('token', data.token);
						setStore({userName: data.name});
						setStore({loggedIn: true});
						console.log(getStore().loggedIn)
						return true;
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation ${error}`)
				}
			},
			fetchUserToDos: async () => {
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/todos`;
					const method = 'GET';
					const body = undefined;
					const app = "ToDos"
					getActions().fetchAPI(url, method, body, app)
				}
			},
			addUserToDos: async (task) =>{
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/todos`;
					const method = 'POST';
					const body = JSON.stringify({
						'task': task,
						'status': 'Not Started'
					});
					const app = "ToDos"
					getActions().fetchAPI(url, method, body, app)
				} else {
					const currentToDos = getStore().userToDos;
					const newToDo = {
						task: task,
						status: 'Not Started',
						id: getStore().idCounter
					};
					let newToDoList = currentToDos.concat(newToDo);
					setStore({ userToDos: newToDoList});
					setStore({ idCounter: getStore().idCounter + 1});
				}
			},
			deleteUserToDos: async(todoID) =>{
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/todos/${todoID}`;
					const method = 'DELETE';
					const body = undefined;
					const app = "ToDos"
					getActions().fetchAPI(url, method, body, app)
				} else {
					let newToDoList = getStore().userToDos.filter((item) => item.id != todoID);
					setStore({ userToDos: newToDoList})
					console.log(getStore().userToDos)
				}
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
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/contacts`;
					const method = 'GET';
					const body = undefined;
					const app = "Contacts";
					getActions().fetchAPI(url, method, body, app)
				}
			},
			addUserContact: async (contact) => {
				if(getStore().loggedIn == true){
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
				} else {
					const currentContacts = getStore().userContacts;
					const newContact = {
						name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address,
						id: getStore().idCounter
					};
					let newContactList = currentContacts.concat(newContact);
					setStore({ userContacts: newContactList});
					setStore({ idCounter: getStore().idCounter + 1});
				}
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
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/contacts/${contactID}`;
					const method = 'DELETE';
					const body = undefined;
					const app = "Contacts";
					getActions().fetchAPI(url, method, body, app)
				} else {
					let newContactList = getStore().userContacts.filter((item) => item.id != contactID);
					setStore({ userContacts: newContactList})
					console.log(getStore().userContacts)
				}
			},
			fetchUserMemos: async () => {
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/memos`;
					const method = 'GET';
					const body = undefined;
					const app = "Memos";
					getActions().fetchAPI(url, method, body, app)
				}
			},
			addUserMemo: async (memo) => {
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/memos`;
					const method = 'POST';
					const body = JSON.stringify({
						'title': memo.title,
						'memo_body': memo.body
					});
					const app = "Memos";
					getActions().fetchAPI(url, method, body, app)
				} else {
					const currentMemos = getStore().userMemos;
					const newMemo = {
						title: memo.title,
						memo_body: memo.body,
						id: getStore().idCounter
					};
					const newMemoList = currentMemos.concat(newMemo);
					setStore({ userMemos: newMemoList});
					setStore({ idCounter: getStore().idCounter + 1});
				}
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
				if(getStore().loggedIn == true){
					const url = `${process.env.BACKEND_URL}/api/memos/${memoID}`;
					const method = 'DELETE';
					const body = undefined;
					const app = "Memos";
					getActions().fetchAPI(url, method, body, app)
				} else {
					let newMemoList = getStore().userMemos.filter((item) => item.id != memoID);
					setStore({ userMemos: newMemoList})
					console.log(getStore().userMemos)
				}
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
				getActions().fetchAPI(url, method, body, app);
				// if (getStore().userToDos.length > 0){
				// 	const userToDos = getStore().userToDos;
				// 	for (task in userToDos) {

				// 	}
				// }
			},
			userSignIn: async (user) => {
				const url = `${process.env.BACKEND_URL}/api/user`;
				const method = 'POST';
				const body = JSON.stringify({
					'username': user.username,
					'password': user.password
				});
				const app = "signIn";
				getActions().fetchAPI(url, method, body, app)
			},
			userLogOut: () => {
				sessionStorage.removeItem('token');
				setStore({loggedIn: false});
			}
		}
	};
};

export default getState;