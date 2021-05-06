import React, { useState } from 'react'
import { Row, Col, Button, Modal } from 'react-bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Header() {
    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    const [showSignIn, setShowSignIn] = useState(false);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);

    return (
        <Col className="header">
            <div>ELEXTRA</div>
            <div>
                <input placeholder="Search here..." />
            </div>
            <div>CartIco</div>
            <div>
                <Button className="mr-2" variant="primary" onClick={handleShowSignUp}>
                    Sign Up
                </Button>
                <Button className="mr-2" variant="primary" onClick={handleShowSignIn}>
                    Sign in
                </Button>
            </div>
            <Modal
                show={showSignUp}
                onHide={handleCloseSignUp}
                backdrop="static"
                keyboard={false}>
                <SignUp />
                <Button className="m-2" variant="secondary" onClick={handleCloseSignUp}>
                    Close
                </Button>
                <Button className="m-2" variant="primary">Sign Up</Button>
            </Modal>
            <Modal
                show={showSignIn}
                onHide={handleCloseSignIn}
                backdrop="static"
                keyboard={false}>
                <SignIn />
                <Button className="m-2" variant="secondary" onClick={handleCloseSignIn}>
                    Close
                </Button>
                <Button className="m-2" variant="primary">Sign In</Button>
            </Modal>
        </Col>
    )
}

export default Header
