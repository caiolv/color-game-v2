import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';

import picked from './picked';

const reducer = combineReducers({
    picked,
})
const store = configureStore({
  reducer,
})
export default store;