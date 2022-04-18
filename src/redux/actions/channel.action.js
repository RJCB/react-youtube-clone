import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL, SET_SUBSCRIPTION_STATUS } from "../actionTypes";
import request from "../../api";

//fetch channel details
export const getChannelDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: CHANNEL_DETAILS_REQUEST
        })

        const { data } = await request.get("/channels", {
            params: {
                part: "snippet,statistics,contentDetails",
                id: id
            }
        })
        dispatch({
            type: CHANNEL_DETAILS_SUCCESS,
            payload: data.items[0]
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: CHANNEL_DETAILS_FAIL,
            payload: error.message
        })
    }
}

//check for subscription status
export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
    try {
        const { data } = await request.get("/subscriptions", {
            params: {
                part: "snippet,contentDetails",
                forChannelId: id,
                mine: true
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })
        //API doesn't return whether user is subscribed to a channel. We need to determine it based on the items array. If it populated, user is subscribed, if not the opposite.(got this info from API docs)
        dispatch({
            type: SET_SUBSCRIPTION_STATUS,
            payload: data.items.length !== 0
        })
    } catch (error) {
        console.log(error.message);
    }
}