import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { login } from '../../redux/actions/auth.action';
import "./_loginScreen.scss";

const LoginScreen = () => {
    const dispatch = useDispatch();

    const accessToken = useSelector(state => state.auth.accessToken);
    const history = useNavigate();

    useEffect(() => {
        if (accessToken) {
            history('/');//redirect user to homepage if session is authenticated
        }
    }, [accessToken, history])

    const handleLogin = () => {
        dispatch(login());
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <button onClick={handleLogin}>Login with google</button>
                <p>Youtube clone built using React</p>
            </div>
        </div>
    )
}

export default LoginScreen