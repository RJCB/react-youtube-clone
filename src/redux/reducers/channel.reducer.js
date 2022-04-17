import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL } from "../actionTypes";
const initialState = {
    loading: true,
    channel: {}
}
export const channelDetailsReducer = (prevState = initialState, action) => {
    const { payload, type } = action

    switch (type) {
        case CHANNEL_DETAILS_REQUEST:
            return {
                ...prevState,
                loading: true
            }
        case CHANNEL_DETAILS_SUCCESS:
            return {
                ...prevState,
                channel: payload,
                loading: false
            }
        case CHANNEL_DETAILS_FAIL:
            return {
                ...prevState,
                channel: null,
                loading: false,
                error: payload
            }
        default:
            return prevState;
    }
}