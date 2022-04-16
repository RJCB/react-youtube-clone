// This action handles the authentication - Login and Logout
import firebase from "firebase/compat/app";
import auth from "../../firebase";
import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actionTypes";

export const login = () => async dispatch => {
    try {
        dispatch({
            type: LOGIN_REQUEST
        })
        const provider = new firebase.auth.GoogleAuthProvider();
        //scopes: to obtain certain content from API: https://developers.google.com/youtube/v3/guides/auth/installed-apps
        provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
        console.log(provider, "provider");
        const res = await auth.signInWithPopup(provider);
        console.log(res);
        const accessToken = res.credential.accessToken;
        const profile = {
            name: res.additionalUserInfo.profile.name,
            photoURL: res.additionalUserInfo.profile.picture
        }
        sessionStorage.setItem("youtube-accessToken", accessToken);
        sessionStorage.setItem("youtube-user", JSON.stringify(profile));

        dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken
        })
        dispatch({
            type: LOAD_PROFILE,
            payload: profile
        })

    } catch (error) {
        console.log(error);
        dispatch({
            type: LOGIN_FAIL,
            payload: error.message
        })
    }
}

export const logOut = () => async dispatch => {
    await auth.signOut();
    dispatch({
        type: LOG_OUT
    })
    sessionStorage.removeItem("youtube-accessToken");
    sessionStorage.removeItem("youtube-user");
}

//Hello guys to everybody facing API exhaustion problem, copy the API data object on first call to an external file called 'Response.js' or anything and use that as export default Response while developing the app for destructuring the data and then finally replace it with an actual API call! this way you dont call the same api data over and over again and exhaust your quota.  :))