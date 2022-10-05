import axios from 'axios';


const API = axios.create({ baseURL: 'https://sportsdb.vercel.app/' });
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});



export const fetchPosts2 = async ({ pageParam = 1 }) => {
  const response = await fetch(
      `https://apiproject-alpha.vercel.app/cart?page=${pageParam}&limit=6`,
 
  );
  const results = await response.json();
      return { results, nextPage: pageParam + 1, totalPages: 100 };
  }; 






export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsByCreator = (name) => API.get(`/posts/creator?name=${name}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}`);
export const fetchPostsBySearch1 = (searchQuery) => API.get(`/posts/search1?searchQuery=${searchQuery.search || 'none'}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);


export const fetchPlayer1 = (id) => API.get(`/players/${id}`);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const updatePlayer = (id, updatedPlayer) => API.patch(`/players/${id}`, updatedPlayer);
export const fetchPlayer = (page) => API.get(`/players?page=${page}`);
export const deletePlayer = (id) => API.delete(`/players/${id}`);
export const createPlayer = (newData) => API.post('/players', newData);
export const fetchCoach = (page) => API.get(`/coaches?page=${page}`);
export const deleteCoach = (id) => API.delete(`/coaches/${id}`);
export const createCoach = (newData) => API.post('/coaches', newData);
export const updateCoach = (id, updatedcoach) => API.patch(`/coaches/${id}`, updatedcoach);
export const fetchStats = (page) => API.get(`/stats?page=${page}`);
export const deleteStats = (id) => API.delete(`/stats/${id}`);
export const createStats = (newData) => API.post('/stats', newData);

export const fetchRent = (page) => API.get(`/rent?page=${page}`);
export const deleteRent = (id) => API.delete(`/rent/${id}`);
export const createRent = (newData) => API.post('/rent', newData);

export const fetchTemp = (page) => API.get(`/temp?page=${page}`);
export const deleteTemp = (id) => API.delete(`/temp/${id}`);
export const createTemp = (newData) => API.post('/temp', newData);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const userUpdate = (id, formData) => API.patch(`/user/${id}/userupdate`, formData);
