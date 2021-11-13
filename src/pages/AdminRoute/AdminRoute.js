import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, isAdmin } = useAuth();
    if (isLoading)
    {
        return <div className="d-flex justify-content-center mt-4"><Spinner animation="grow" variant="dark" /></div>
    }
    return (
        <Route
            {...rest}
            render = {({location}) => 
            user?.email && isAdmin ?
            children :
            <Redirect
            to={{
                pathname: '/',
                state: {from: location}
            }} />
            }
        >
            
        </Route>
    )
}

export default AdminRoute;