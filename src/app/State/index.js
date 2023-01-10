import { combineReducers, legacy_createStore as createStore } from 'redux';
import contentReducer from '../Content/contentReducer';

const rootReducer = combineReducers({
  content: contentReducer,
});
const store = createStore(rootReducer);

export default store;