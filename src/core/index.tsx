import { combineReducers } from 'redux';
import LoginReducer from '@src/pages/login/models/LoginReducer';
import AdminReducer from '@src/pages/admin/models/AdminReducer';
import ProductReducer from '@src/pages/product/models/ProductReducer';
const RootReducer = combineReducers({
  login: LoginReducer,
  adminReducer: AdminReducer,
  productReducer: ProductReducer,
});
export default RootReducer;