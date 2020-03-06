import {actionGenerator} from "../reduxUtil";
const actionTypes={
    USER_SET:"app_user.set",
    USER_RESET:"app_user.reset",
    USER_UPDATE:"app_user.update",
    FETCHING_SUSPEND:"app_fetching.suspend",
    FETCHING_TRUE:"app_fetching.true",
    FETCHING_FALSE:"app_fetching.false",
};

export const setUser=actionGenerator(actionTypes.USER_SET);
export const resetUser=actionGenerator(actionTypes.USER_RESET);
export const updateUser=actionGenerator(actionTypes.USER_UPDATE);


export {actionTypes};