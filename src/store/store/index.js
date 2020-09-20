import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import reducers from "../reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
export default store;
