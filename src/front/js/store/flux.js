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
			}
		}
	};
};

export default getState;
