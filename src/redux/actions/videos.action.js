import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, SUBSCRIPTIONS_CHANNEL_FAIL, SUBSCRIPTIONS_CHANNEL_REQUEST, SUBSCRIPTIONS_CHANNEL_SUCCESS } from "../actionTypes";
import request from "../../api";

//fetch popular videos to be displayed on the homepage
export const getPopularVideos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })

        const { data } = await request.get("/videos", {
            params: {
                part: "snippet,contentDetails,statistics",
                chart: "mostPopular",
                regionCode: "CA",
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
            }
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'ALL'
            }
        })
        console.log(data);
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}

//fetch video by category selected by user
//getState: gets global state
export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })

        const { data } = await request.get("/search", {
            params: {
                part: "snippet",
                maxResults: 20,
                pageToken: getState().homeVideos.nextPageToken,
                q: keyword,
                type: "video"
            }
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword
            }
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}

//fetch the video user clicks on
export const getVideoById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: SELECTED_VIDEO_REQUEST
        })

        const { data } = await request.get("/videos", {
            params: {
                part: "snippet,statistics",
                id: id
            }
        })
        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0]
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: SELECTED_VIDEO_FAIL,
            payload: error.message
        })
    }
}

//fetch related videos to show on the right side,when a particular video is selected to watch
export const getRelatedVideos = (id) => async (dispatch) => {
    try {
        dispatch({
            type: RELATED_VIDEO_REQUEST
        })

        const { data } = await request.get("/search", {
            params: {
                part: "snippet",
                relatedToVideoId: id,
                maxResults: 15,
                type: 'video'
            }
        })
        dispatch({
            type: RELATED_VIDEO_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: RELATED_VIDEO_FAIL,
            payload: error.message
        })
    }
}

//fetch videos based on user search
export const getVideosBySearch = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCHED_VIDEO_REQUEST
        })

        const { data } = await request.get("/search", {
            params: {
                part: "snippet",
                q: keyword,
                maxResults: 20,
                type: 'video,channel'
            }
        })
        dispatch({
            type: SEARCHED_VIDEO_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: SEARCHED_VIDEO_FAIL,
            payload: error.message
        })
    }
}


//Fetch user subscriptions
export const getVideosByChannel = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUBSCRIPTIONS_CHANNEL_REQUEST
        })
        const { data } = await request.get("/subscriptions", {
            params: {
                part: "snippet,contentDetails",
                mine: true
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })
        //API doesn't return whether user is subscribed to a channel. We need to determine it based on the items array. If it populated, user is subscribed, if not the opposite.(got this info from API docs)
        dispatch({
            type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: SUBSCRIPTIONS_CHANNEL_FAIL,
            payload: error.message
        })
    }
}