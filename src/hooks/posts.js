import { axiosInstance } from "../service/apiClient";

const getPosts = async (userId) => axiosInstance.get('/posts', {
  params: {
    userId
  }
}).then(res => res.data).catch(err => console.log(err));

console.log(getPosts);
const getPost = async (id) => axiosInstance.get(`/posts/${id}`).then(res => res.data).catch(err => console.log(err));

export const postsApi = {
  getPosts,
  getPost
}