import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import LoginReducer from '@src/pages/login/models/LoginReducer';
import AdminReducer from '@src/pages/admin/models/AdminReducer';
import ProductReducer from '@src/pages/product/models/ProductReducer';

const RootReducer = combineReducers({
  login: LoginReducer,
  adminReducer: AdminReducer,
  productReducer: ProductReducer,
});
const createSaga = createSagaMiddleware();
const Store = createStore(RootReducer, applyMiddleware(createSaga));

const Root = {
  store: Store,
  run: createSaga.run,
};
export default Root;