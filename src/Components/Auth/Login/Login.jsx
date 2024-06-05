import React, { useState } from 'react'
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md";
import '../../../App.css';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ isActive }) => {
    const [msg, setMsg] = useState();
    const [value, setValue] = useState({
        email: "",
        pass: "",
    });

    const HandelSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, value.email, value.pass)
            .then(res => {
                setMsg("Login Successfully");
                window.location.href = "/home";
            }).catch((err) => {
                setMsg(err.message);
            });
    }

    return (
        <form className={`login ${isActive ? "d-block" : "d-none"}`}>
            <div className="input-box">
                <MdOutlineEmail className='icons' />
                <input required type="email" placeholder='Email' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
            </div>
            <div className="input-box">
                <MdOutlinePassword className='icons' />
                <input required type="password" name='Password' placeholder='6 Digit Password' onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
            </div>
            <button onClick={HandelSubmit} className={`submitBtn`} type='submit'>
                {isActive ? "Login" : "Signup"}
            </button>
            <div className='alert'>{msg}
            </div>
        </form>
    )
}
export default Login;