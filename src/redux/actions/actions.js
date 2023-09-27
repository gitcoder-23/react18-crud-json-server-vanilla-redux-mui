import * as types from './actionType';
import axios from 'axios';
import { rootApi } from '../../constants';

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const getSingleUser = (oneUser) => ({
  type: types.GET_SINGLE_USER,
  payload: oneUser,
});

export const loadAllUsers = () => {
  return function (dispatch) {
    axios
      .get(`${rootApi}/users`)
      .then((resp) => {
        console.log('loadUsers->', resp);
        dispatch(getUsers(resp.data));
      })
      .catch((err) => {
        console.log('loadUsers-error=>', err);
      });
  };
};

export const getOneSingleUser = (id) => {
  return function (dispatch) {
    axios
      .get(`${rootApi}/users/${id}`)
      .then((resp) => {
        // console.log('getSingleUser->', resp);
        dispatch(getSingleUser(resp.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
