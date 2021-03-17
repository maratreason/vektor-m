export interface CalcState {
	tips: any[];
    step: number;
	calcTopmenu: any[];
    calcBottommenu: any[];
    posts: any[];
    consolePosts: any[];
    totalSum: number;
    render: object;
}

export enum CalcActionTypes {
	SET_BOTTOM_MENU_STEP = "SET_BOTTOM_MENU_STEP",
	CHECK_POST_NUMBER = "CHECK_POST_NUMBER",
	CHECK_CONSOLE_POST = "CHECK_CONSOLE_POST",
	SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface SetBottomMenuAction {
	type: CalcActionTypes.SET_BOTTOM_MENU_STEP;
	payload: number;
}

interface CheckPostNumberAction {
	type: CalcActionTypes.CHECK_POST_NUMBER;
	payload: number;
}

interface CheckConsolePostAction {
	type: CalcActionTypes.CHECK_CONSOLE_POST;
	payload: number;
}


interface SetTodoPageAction {
	type: CalcActionTypes.SET_TODO_PAGE;
	payload: number;
}

export type CalcAction = SetBottomMenuAction | CheckPostNumberAction | CheckConsolePostAction | SetTodoPageAction;
