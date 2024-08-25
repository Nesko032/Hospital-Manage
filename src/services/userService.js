import axios from '../axios';

const handleOnClickLogin = (email, password) => {
    return axios.post('/api/login', { email, password });
};

export { handleOnClickLogin };
