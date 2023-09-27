import * as types from './actionType';
import axios from 'axios';
import { rootApi } from '../../constants';

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
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
