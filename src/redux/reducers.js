import { combineReducers } from 'redux';
import hero from './hero/reducer';

const reducers = combineReducers({
    hero
})

export default reducers;