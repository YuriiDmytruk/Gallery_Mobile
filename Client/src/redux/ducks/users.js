export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

const defaultState = {
  user: {
    _id: '',
    email: '',
    password: '',
    nickName: '',
    friends: [],
    createdAt: '',
    updatedAt: '',
  },
};

export const usersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.user };
    case DELETE_USER:
      return { ...state, user: defaultState.user };
    default:
      return state;
  }
};

export const deleteUser = () => {
  return { type: DELETE_USER };
};

export const addUser = (user) => {
  return { type: ADD_USER, user: user };
};
