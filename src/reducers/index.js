import counterReducer from './counter';
import loggedReducer from './isLogged';

//REDUX
import { combineReducers } from 'redux';

//Pasamos todos los REDUCERS para combinarlos
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;