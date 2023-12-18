import amount from '../features/amount';
import { combineReducers, createStore } from 'redux';
import goods from '../features/goods';

const reducer = combineReducers({
    amount,
    goods
});
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

export default store;
