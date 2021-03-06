import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
import { registration } from '../../store/actions/userActions'

function SignUp() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showSignUp, setShowSignUp] = useState(false);
    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);

    return (
        <div>
            <Button className="mr-2" variant="primary" onClick={handleShowSignUp}>
                Sign Up
            </Button>

            <Modal
                show={showSignUp}
                onHide={handleCloseSignUp}
                backdrop="static"
                keyboard={false}>
                <Form className="p-2">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)}
                            type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password" />
                        <Form.Text className="text-muted">
                            Password must not be shorter than 8 characters
                    </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </Form>

                <Button className="m-2" variant="primary"
                    onClick={() => registration(email, password)} >Sign Up
                </Button>
                <Button className="m-2" variant="secondary" onClick={handleCloseSignUp}>
                    Close
                </Button>
            </Modal>
        </div>
    )
}

export default SignUp


