import React, { useState } from 'react'
import { MdOutlineEmail, MdOutlinePassword, MdOutlineMarkEmailRead } from "react-icons/md";
import { FaCheck, FaTimes, FaUserCircle } from "react-icons/fa";
import '../../../App.css';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


const Signup = ({ isActive }) => {
    const [msg, setMsg] = useState();
    const [check, setCheck] = useState(false);
    const [value, setValue] = useState({
        email: "",
        pass: "",
        name: ""
    });

    const checkFun = (e) => {
        if (value.pass == e.target.value) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    }

    const HandelSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, value.email, value.pass)
            .then(async res => {
                await updateProfile(res.user, {
                    displayName: value.name,
                });
                setMsg("Acount created! Please Login Now");
                setCheck(false);
                // window.location.href = "/";
            }).catch((err) => {
                setMsg(err.message);
                setCheck(false);
            });
    }

    return (
        <form className={`signup ${isActive ? "d-none" : "d-block"}`}>
            <div className="input-box">
                <MdOutlineEmail className='icons' />
                <input required type="email" placeholder='Email' onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))} />
            </div>
            <div className="input-box">
                <FaUserCircle className='icons' />
                <input required type="text" placeholder='User Name' onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))} />
            </div>
            <div className="input-box">
                <MdOutlinePassword className='icons' />
                <input required type="password" name='Password' placeholder='6 Digit Password' onChange={(e) => setValue((prev) => ({ ...prev, pass: e.target.value }))} />
            </div>
            <div className="input-box">
                {check ? <FaCheck className='green' /> : < FaTimes className='red' />}
                <input required type="password" name='Confirm Password' placeholder='Confirm Password' onChange={checkFun} />
            </div>
            <button onClick={HandelSubmit} className={`submitBtn ${check ? "" : "disabled"}`} disabled={!check} type='submit'>
                {isActive ? "Login" : "Signup"}
            </button>
            <div className='alert'>{msg}
            </div>
        </form>
    )
}

export default Signup;
