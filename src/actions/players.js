import {DELETEPLAYER, PLAYER, START_LOADING, END_LOADING, FETCH_ALL, FETCH_POST, FETCH_BY_SEARCH, CREATE, UPDATE, LIKE, COMMENT, FETCH_BY_CREATOR, CREATEPLAYER } from '../constants/actionTypes';
import * as api from '../api/index.js';
import swal from 'sweetalert2'


export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.fetchPlayer1(id);

    dispatch({ type: FETCH_POST, payload: { post: data } });
  } catch (error) {
    console.log(error);
  }
};

export const getPostss = (page) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const { data: { data, currentPage, numberOfPages } } = await api.fetchPlayer(page);
  
      dispatch({ type: PLAYER, payload: { data, currentPage, numberOfPages } });
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

export const createPlayer= (post) => async (dispatch) => {
  let timerInterval
  swal.fire({
    title: 'booking',
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
      const { data } = await api.createPlayer(post);
  
      dispatch({ type: CREATEPLAYER, payload: data });
      dispatch({ type: CREATE, payload: data });
      console.log("creating");
     {const Toast = swal.mixin({ toast: true, position: 'top-end',
      showConfirmButton: false, timer: 5000, timerProgressBar: true,
       didOpen: (toast) => { toast.addEventListener('mouseenter', swal.stopTimer)
        toast.addEventListener('mouseleave', swal.resumeTimer) } }) 
     Toast.fire({ icon: 'success', title: 'Book successfully' })
    }
    }
    catch (error) {
      console.log(error,"hello");
    
  
        swal.fire({ icon: 'error', 
        title: 'Oops...', text: 'Something went wrong, Please check your Internet!.',
       })
      
  
    }
  };

export const updatePlayer = (id, player) => async (dispatch) => {
  let timerInterval
  swal.fire({
    title: 'booking',
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
    const { data } = await api.updatePlayer(id, player);

    dispatch({ type: UPDATE, payload: data });
    {const Toast = swal.mixin({ toast: true, position: 'top-end',
    showConfirmButton: false, timer: 5000, timerProgressBar: true,
     didOpen: (toast) => { toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer) } }) 
   Toast.fire({ icon: 'success', title: ' Updated successfully' })
  }
  }  catch (error) {
    console.log(error,"hello");
  

      swal.fire({ icon: 'error', 
      title: 'Oops...', text: 'Something went wrong, Please check your Internet!.',
     })
    

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

export const deletePlayer = (id) => async (dispatch) => {
  try {
    await await api.deletePlayer(id);

    dispatch({ type: DELETEPLAYER, payload: id });
  } catch (error) {
    console.log(error);
  }
};