import {alertConstants} from "./Alert.constants";

export function AlertReducer(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            console.log(action.payload.message)
            return {
                type: 'alert-success',
                message: action.payload.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.payload.message
            };
        case alertConstants.CLEAR:
            return {};
        case alertConstants.ADDED_FAVORITE:
            return {
                message: action.payload.message
            };
        case alertConstants.REMOVED_FAVORITE:
            return {
                message: action.payload.message
            };
        default:
            return state
    }
}
