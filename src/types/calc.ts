export interface CalcState {
  tips: any[];
  step: number;
  calcTopmenu: any[];
  calcBottommenu: any[];
  posts: any[];
  checkedButtons?: number[] | any;
  consolePosts: any[];
  totalSum: number;
  render: object;
  steps?: any | object;
}

export enum CalcActionTypes {
  SET_BOTTOM_MENU_STEP = "SET_BOTTOM_MENU_STEP",
  CHECK_POST_NUMBER = "CHECK_POST_NUMBER",
  CHECK_CONSOLE_POST = "CHECK_CONSOLE_POST",
  SET_TODO_PAGE = "SET_TODO_PAGE",
  CHECK_CALC_BUTTON = "CHECK_CALC_BUTTON",
}

export interface checkedButtonType {
  id: number;
  active: boolean;
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
interface CheckCalcButtonAction {
  type: CalcActionTypes.CHECK_CALC_BUTTON;
  payload: number;
}

export type CalcAction =
  | SetBottomMenuAction
  | CheckPostNumberAction
  | CheckConsolePostAction
  | SetTodoPageAction
  | CheckCalcButtonAction;
