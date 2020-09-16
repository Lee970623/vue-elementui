const user = {
    // global state object, like a data model
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
        user: {
            username: '',
            password: ''
        }
    },

    // getter
    getters: {
        getUser(state) {
            return state.user
        }
    },

    // setter, change the object in state (synchronously)
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    },

    // asynchronously call mutations method
    actions: {
        asyncUpdateUser(context, user) {
            context.commit('updateUser', user);
        }
    }
}

export default user;