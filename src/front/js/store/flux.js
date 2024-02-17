const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userToDos: {}
		},
		actions: {
			fetchUserToDos: async () => {
				const opts = {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
						// 'Authorization': `Bearer ${sessionStorage.token}`
					}
				} 
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/todos`, opts);
					const data = await resp.json();
					if (resp.status === 200) {
						console.log(data)
						setStore({userToDos: data})
						console.log(getStore().userToDos)
						return true;
					} else {
						console.error(`Unexpected error: ${data.message}`)
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation ${error}`)
				}
			},
			addUserToDos: async (task) => {
				const opts = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
					body: JSON.stringify({
						"task": task,
						"status": "Not Started"
					})
				}
				try{
					const resp = await fetch(`${process.env.BACKEND_URL}/api/todos`, opts);
					const data = await resp.json();
					if (resp.status === 200) {
						console.log(data.todos)
						setStore({userToDos: data.todos})
						console.log(getStore().userToDos)
						return true;
					} else {
						console.error(`Unexpected error: ${data.message}`)
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation ${error}`)
				}
			},
			deleteUserToDos: async (todoID) => {
				const opts = {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					}
				}
				try{
					const resp = await fetch(`${process.env.BACKEND_URL}/api/todos/${todoID}`, opts);
					const data = await resp.json();
					if (resp.status === 200) {
						console.log(data.todos)
						setStore({userToDos: data.todos})
						console.log(getStore().userToDos)
						return true;
					} else {
						console.error(`Unexpected error: ${data.message}`)
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation ${error}`)
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
			}
		}
	};
};

export default getState;
