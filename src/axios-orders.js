import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://flash-chat-df0d2.firebaseio.com/'
});

export default instance;
