import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";

import { tasksReducer } from "./tasks/reducer";
import { filtersReducer } from "./filters/reducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
