import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import game from './game';

const reducer = combineReducers({
    game,
})
const store = configureStore({
  reducer,
})
export default store;