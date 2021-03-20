import axios from "axios";
import { Dispatch } from "redux";
import { CalcAction, CalcActionTypes, checkedButtonType } from "../../types/calc";

export const setBottomMenuStep = (step: number) => (dispatch: Dispatch<CalcAction>) => {
  dispatch({ type: CalcActionTypes.SET_BOTTOM_MENU_STEP, payload: step });
};

export const checkPostNumber = (num: number) => (dispatch: Dispatch<CalcAction>) => {
  dispatch({ type: CalcActionTypes.CHECK_POST_NUMBER, payload: num });
};

export const checkConsolePost = (num: number) => (dispatch: Dispatch<CalcAction>) => {
  dispatch({ type: CalcActionTypes.CHECK_CONSOLE_POST, payload: num });
};

export const checkCalcButton = (checkedButton: number) => (dispatch: Dispatch<CalcAction>) => {
  dispatch({ type: CalcActionTypes.CHECK_CALC_BUTTON, payload: checkedButton });
};
