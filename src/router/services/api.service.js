import axios from 'axios'
import { TokenService } from '../services/storage.service'
import { store } from '@/store/'

const ApiService = {

    // Store the 401 interceptor position so that it can be later ejected when needed
    _401interceptor: null,



    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        console.log("api header set")
        axios.defaults.headers.common['coredata-x-token'] = TokenService.getToken();
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(recource) {
        return axios.get(recource)
    },

    post(recource, data) {
        return axios.post(recource, data)
    },

    put(recource, data) {
        return axios.put(recource, data)
    },

    delete(recource) {
        return axios.delete(recource)
    },
    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data) {
        console.log('baseURL', axios.defaults.baseURL)
        console.log('submit 4', data);

        return axios(data)
    },

    mount401Interceptor() {
        this._401interceptor = axios.interceptors.response.use(
            (response) => {
                return response
            },
            async(error) => {
                if (error.request.status == 401) {
                    if (error.config.url.includes('/token/')) {
                        // Refresh token has failed/ Logout the user
                        store.dispatch('auth/logout')
                        throw error
                    } else {
                        // Refresh the access token
                        try {
                            await store.dispatch('auth/refreshToken')
                                // Rety the original request
                            return this.customRequest({
                                method: error.config.method,
                                url: error.config.url,
                                data: error.config.data
                            })
                        } catch (e) {
                            // Refresh has failed - reject the original request
                            throw error
                        }
                    }
                }

                // If error was not 401 just reject as is
                throw error
            }
        )
    },

    unmount401Interceptor() {
        // eject the interceptor
        axios.interceptors.response.ejsct(this._401interceptor)
    }
}

export default ApiService;