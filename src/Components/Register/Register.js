import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Create New Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="mail" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="submit" />

                </form>
                <p>Already have account? <Link to="/login">Login</Link> </p>
                <br />
                <button>Google Sign IN</button>
            </div>
        </div>
    );
};

export default Register;