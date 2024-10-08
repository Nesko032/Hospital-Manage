import axios from '../axios';

const handleOnClickLogin = (email, password) => {
    return axios.post('/api/login', { email, password });
};

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`);
};

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
};

const editUserService = (data) => {
    return axios.put('/api/edit-user', data);
};

const deleteUserService = (id) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: id,
        },
    });
};

export {
    handleOnClickLogin,
    getAllUsers,
    createNewUserService,
    editUserService,
    deleteUserService,
};
