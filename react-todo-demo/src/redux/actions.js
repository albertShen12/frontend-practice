import {actionTypes as appActTypes} from "./app/actions";
import {actionTypes as todoActTypes} from "./todo/actions";


const doAction=type=>{
    return payload=>({
        type:type,
        payload
    })
};

export {
    doAction,
    appActTypes,
    todoActTypes
};
