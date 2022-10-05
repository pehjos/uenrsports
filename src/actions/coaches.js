import {DELETECoach, Coach, START_LOADING, END_LOADING, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, COMMENT, FETCH_BY_CREATOR, CREATECoach } from '../constants/actionTypes';
import * as api from '../api/index.js';
import swal from 'sweetalert2'
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data, currentPage, numberOfPages } } = await api.fetchCoach(page);

    dispatch({ type: Coach, payload: { data, currentPage, numberOfPages } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsByCreator = (name) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsByCreator(name);

    dispatch({ type: FETCH_BY_CREATOR, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data: { data } } = await api.fetchPostsBySearch(searchQuery);

    dispatch({ type: FETCH_BY_SEARCH, payload: { data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createCoach = (post) => async (dispatch) => {
  let timerInterval
  swal.fire({
    title: 'Processing !',
    html: 'Loading... <b></b> milliseconds.',
    timer: 10000,
    timerProgressBar: true,
    didOpen: () => {
      swal.showLoading()
      const b = swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = swal.getTimerLeft()
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
  })
    try {
      const { data } = await api.createCoach(post);
  
      dispatch({ type: CREATECoach, payload: data });
    } catch (error) {
      console.log(error.message ,"error");
    }
  };

export const updateCoach = (id, coach) => async (dispatch) => {
  try {
    const { data } = await api.updateCoach(id, coach);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  try {
    const { data } = await api.likePost(id, user?.token);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

    dispatch({ type: COMMENT, payload: data });

    return data.comments;
  } catch (error) {
    console.log(error);
  }
};

export const deleteCoach = (id) => async (dispatch) => {
  try {
    await await api.deleteCoach(id);

    dispatch({ type: DELETECoach, payload: id });
  } catch (error) {
    console.log(error);
  }
};