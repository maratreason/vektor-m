import { combineReducers } from "redux";
import { calcReducer } from "./calcReducer";

export const rootReducer = combineReducers({
	calc: calcReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
