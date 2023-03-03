import axios from 'axios'
import { storage } from '../config/storage';
import { navigationPush } from '../navigation/RootNavigation';

const APIService = axios.create({
    baseURL: "base_url",
    headers
});

APIService.interceptors.request.use(
    config => {
        const accessToken = storage.getString('token');
        if (accessToken) {
            config.headers = { Authorization: `Bearer ${accessToken}` };
        }
        return config;
    },
    error => {
        Promise.reject(error.response || error.message);
    }
);

APIService.interceptors.response.use(
    response => {
        return response.data;
    },
    async function (error) {
        if (error.response.status === 401) {
            return navigationPush('Auth');
        }
        if (error.response.status === 404) {
            //TODO 404
        }
        if (error.response.status === 400) {
            //TODO 400
        }
        return Promise.reject(error.response || error.message);
    }
);

const headers = () => {
    let props = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };
    let token = storage.getString(`token`)

    if (token) {
        props.Authorization = `Bearer ${token}`;
    }
    return {
        headers: props
    }
}

export default APIService;