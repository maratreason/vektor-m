import axios from "axios";
import { Dispatch } from "redux";
import { CalcAction, CalcActionTypes } from "../../types/calc";

export const setBottomMenuStep = (step: number) => (dispatch: Dispatch<CalcAction>) => {
	dispatch({type: CalcActionTypes.SET_BOTTOM_MENU_STEP, payload: step})
}

export const checkPostNumber = (num: number) => (dispatch: Dispatch<CalcAction>) => {
	dispatch({type: CalcActionTypes.CHECK_POST_NUMBER, payload: num});
}

export const checkConsolePost = (num: number) => (dispatch: Dispatch<CalcAction>) => {
	dispatch({type: CalcActionTypes.CHECK_CONSOLE_POST, payload: num});
}

// export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<CalcAction>) => {
// 	try {
// 		dispatch({ type: CalcActionTypes.FETCH_TODOS });
// 		const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
// 			params: {
// 				_page: page,
// 				_limit: limit,
// 			},
// 		});
// 		dispatch({ type: CalcActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
// 	} catch (e) {
// 		dispatch({
// 			type: CalcActionTypes.FETCH_TODOS_ERROR,
// 			payload: "Произошла ошибка при загрузке списка дел",
// 		});
// 	}
// };

// export function setTodoPage(page: number): CalcAction {
// 	return {
// 		type: CalcActionTypes.SET_TODO_PAGE,
// 		payload: page,
// 	};
// }
