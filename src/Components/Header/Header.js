import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Details from '../Details/Details/Details';
import Login from '../Login/Login';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';

import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <h1 className="text-center text-secondary webName">mind<span className="text-danger">Doc</span></h1>
            <Router>
                <nav>
                    <Link to="/Home">Home</Link>
                    {user.email && <span >Hello {user.displayName} </span>}
                    {
                        user.email ?
                            <button onClick={logOut}>Logout</button>
                            :
                            <Link to="/login">Login</Link>
                    }


                </nav>
                <Switch>


                    <Route path="/Login">
                        <Login></Login>

                    </Route>
                    <Route path="/register">
                        <Register></Register>


                    </Route>

                    <Route exact path="/">
                        <Banner></Banner>
                        <Activities></Activities>
                    </Route>
                    <PrivateRoute path="/Details/:detailsId">
                        <Details></Details>
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </Router>



        </div>
    );
};

export default Header;