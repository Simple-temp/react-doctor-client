import React, { useState } from 'react';
import "./Login.css"
import login from "../../img/login.png"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';


initializeApp(firebaseConfig)

const Login = () => {

    const [loggedInUser, setloggedInUser] = useState( UserContext )

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const provider = new GoogleAuthProvider();

    const GoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const {displayName,email,photoURL} = result.user;
                const loggedInuserInfo = {name:displayName, email , img:photoURL}
                setloggedInUser(loggedInuserInfo);
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
            });
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="from-box">
                        <form action="">
                            <input type="text" placeholder='User name' name="name" className='w-100 loginInput' />
                            <input type="password" placeholder='Password' name="password" className='w-100 loginInput' />
                            {/* <input type="submit" value="Sign in" className='btn btn-primary d-block w-100 mt-5' /> */}
                        </form>
                        <hr />
                        <button onClick={GoogleSignIn} className='btn btn-primary d-block w-100 mt-5'>Google sign in</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={login} alt="" className='img-fluid' />
                </div>
            </div>
        </div>
    );
};

export default Login;