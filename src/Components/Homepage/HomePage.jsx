import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({ name }) => {
    return (
        <div>

            {
                name ?
                    <div className='home'>
                        <img src="loggedIn.gif" alt="loggedIn" />
                        <br />
                        Hey {name}, You are Successfully Logged In.
                        <br />
                        <br />
                        <Link to="/"> Logout?</Link>
                    </div>
                    :
                    <div className='home'>
                        You don't have any account. Please Click the button below.
                        <br />
                        <br />
                        <Link to="/">Login Now</Link>
                    </div>
            }
        </div>
    )
}

export default HomePage