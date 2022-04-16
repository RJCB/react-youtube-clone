import axios from "axios";

//create an axios instance, so we can set up a config like baseUrl, and all of the calls made will simply require the URI for the HTTP calls, without the full URL.
const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        // key: process.env.REACT_APP_YOUTUBE_API_KEY
        key: 'AIzaSyDf2NdAOuYLeehNHlFcGzlbRlO1EgrTYe8'
    }
})

export default request;