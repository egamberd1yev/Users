import { axiosInstance } from "../service/apiClient";

const getComments = async (postId) =>
  axiosInstance
    .get(`/posts/${postId}/comments`) 
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return [];
    });

export const commentsApi = {
  getComments,
};
