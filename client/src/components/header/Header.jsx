import React, { useState } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/userActions';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Header() {
    const isAuth = useSelector(reducers => reducers.user.isAuth)
    const dispatch = useDispatch()
    console.log(isAuth);
    return (
        <Col className="header">
            <div>ELEXTRA</div>
            <div>
                <input placeholder="Search here..." />
            </div>
            <div>CartIco</div>
            <div className="header__buttons">
                {!isAuth && <SignUp />}
                {!isAuth && <SignIn />}
                {isAuth && <Button onClick={() => dispatch(logOut())}>Выход</Button>}
            </div>

        </Col>
    )
}

export default Header
