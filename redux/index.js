import { combineReducers } from 'redux';
import App from './app/reducer';
// npm i next-redux-wrapper redux react-redux redux-thunk redux-devtools-extension
let rootReducer = combineReducers({
    App
});

export default rootReducer;