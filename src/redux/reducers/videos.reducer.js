import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actionTypes";

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "ALL"
}
export const homeVideoReducer = (prevState = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case HOME_VIDEOS_SUCCESS: return {
            ...prevState,
            videos: prevState.activeCategory === payload.category ? [...prevState.videos, ...payload.videos] : payload.videos,
            loading: false,
            nextPageToken: payload.nextPageToken,
            activeCategory: payload.category
        }
        case HOME_VIDEOS_FAIL: return {
            ...prevState,
            loading: false,
            error: payload
        }
        case HOME_VIDEOS_REQUEST: return {
            ...prevState,
            loading: true
        }
        default:
            return prevState
    }
}