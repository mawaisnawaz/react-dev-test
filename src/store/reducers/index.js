import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import contactsReducer from "./contactsReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactPersistedConfig = {
  key: "root",
  storage: storage,
};

const filterPersistedConfig = {
  key: "auth",
  storage: storage,
};

const reducers = combineReducers({
  filter: persistReducer(filterPersistedConfig, filterReducer),
  contacts: persistReducer(contactPersistedConfig, contactsReducer),
});

export default reducers;
