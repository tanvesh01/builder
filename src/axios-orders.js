import axios from 'axios';

const instance = axios.create({
    baseURL:'https://my-react-burger-d.firebaseio.com/'
});

export default instance;