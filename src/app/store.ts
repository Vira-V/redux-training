import amount from '../features/amount';
import { combineReducers, createStore } from 'redux';
import goods from '../features/goods';
import position from '../features/position';

const reducer = combineReducers({
    amount,
    goods,
    position
});
const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>

export default store;
