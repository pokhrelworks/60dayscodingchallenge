import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";

// Combining all the possible reducers available into a root reducer.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

// Now it's time to include redux in our code base
const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
