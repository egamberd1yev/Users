import { axiosInstance } from "../service/apiClient";

const getUsers = async () => axiosInstance.get('/users').then(res => res.data).catch(err => console.log(err));

const getUser = async (id) => axiosInstance.get(`/users/${id}`).then(res => res.data).catch(err => console.log(err));

export const usersApi = {
  getUsers,
  getUser
}