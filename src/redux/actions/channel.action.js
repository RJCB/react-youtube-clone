import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL } from "../actionTypes";
import request from "../../api";

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