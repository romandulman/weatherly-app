import {alertConstants} from "./Alert.constants";

export function Alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        case alertConstants.ADDED_FAVORITE:
            return {
                message: action.message
            };
        case alertConstants.REMOVED_FAVORITE:
            return {
                message: action.message
            };
        default:
            return state
    }
}
