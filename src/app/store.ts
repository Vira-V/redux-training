import amount from '../features/amount';
import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
    amount,
});
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

export default store;
