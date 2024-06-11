import { applyMiddleware } from "redux";

import reducers from "./reducer";

export const store = createStore(reducers,{}, applyMiddleware(thunk));