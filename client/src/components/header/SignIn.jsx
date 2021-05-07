import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/userActions'


function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const [showSignIn, setShowSignIn] = useState(false);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);

    return (
        <div>
            <Button className="mr-2" variant="primary" onClick={handleShowSignIn}>
                Sign in
            </Button>

            <Modal
                show={showSignIn}
                onHide={handleCloseSignIn}
                backdrop="static"
                keyboard={false}>
                <Form className="p-2">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)} />
                        <Form.Text className="text-muted">
                            Enter your email
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                        <Form.Text className="text-muted">
                            Enter your password
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>

                <Button className="m-2" variant="primary"
                    onClick={() => dispatch(login(email, password))}>
                    Sign In
                </Button>
                <Button className="m-2" variant="secondary" onClick={handleCloseSignIn}>
                    Close
                </Button>
            </Modal>
        </div>
    )
}

export default SignIn