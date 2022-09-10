import {createStore} from 'vuex'

export default createStore({
    state: {
        apiPath: 'http://127.0.0.1:8000/api',
        auth: null,
        token: null
    },
    getters: {
        getUrl: (state) => (uri) => state.apiPath + uri
    },
    mutations: {},
    actions: {
        setAuth({state}, auth) {
            return state.auth = auth;
        },
        setToken({state}, token) {
            return state.token = token;
        },
        logout({state}) {
            state.token = null;
            state.auth = null;
        }
    },
    modules: {}
})
