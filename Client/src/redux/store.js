import { createStore } from 'redux';
import { usersReducer } from './ducks/users';

const store = createStore(usersReducer);

export { store };
