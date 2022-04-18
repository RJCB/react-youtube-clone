import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS } from "../actionTypes";
const initialState = {
    loading: true,
    comments: null
}
export const commentListReducer = (prevState = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case COMMENT_LIST_REQUEST:
            return {
                ...prevState,
                loading: true
            }
        case COMMENT_LIST_SUCCESS:
            return {
                ...prevState,
                comments: payload,
                loading: false
            }
        case COMMENT_LIST_FAIL:
            return {
                ...prevState,
                comments: null,
                loading: false,
                error: payload
            }
        default:
            return prevState;
    }
}