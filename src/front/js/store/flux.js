const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			userToDos: []
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
					console.log('fetch todos', data)
					if (resp.status == 200) {
						setStore({userToDos: data})
					}
				} catch (error) {
					console.error(`There was a problem with the fetch operation ${error}`)
				}
			}
		}
	};
};

export default getState;
