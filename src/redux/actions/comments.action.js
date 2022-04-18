import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, CREATE_COMMENT_FAIL, CREATE_COMMENT_SUCCESS } from "../actionTypes";
import request from "../../api";

//fetch comments of the selected video
export const getCommentsOfVideoById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_LIST_REQUEST
        })

        const { data } = await request.get("/commentThreads", {
            params: {
                part: "snippet",
                videoId: id
            }
        })

        dispatch({
            type: COMMENT_LIST_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: COMMENT_LIST_FAIL,
            payload: error.message
        })
    }
}

//add a comment
export const addComment = (id, text) => async (dispatch, getState) => {
    try {
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text
                    }
                }
            }
        }
        dispatch({
            type: COMMENT_LIST_REQUEST
        })

        await request.post("/commentThreads", obj, {
            params: {
                part: "snippet"
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })

        dispatch({
            type: CREATE_COMMENT_SUCCESS
        })
        // fetch the latest comments list after comment POST is successful
        setTimeout(() => dispatch(getCommentsOfVideoById(id)), 3000);
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: CREATE_COMMENT_FAIL,
            payload: error.message
        })
    }
}