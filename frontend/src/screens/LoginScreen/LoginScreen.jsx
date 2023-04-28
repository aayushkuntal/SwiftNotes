import MainScreen from '../../components/MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate=useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            navigate('/mynotes')
        }
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                },
                withCredentials: false
            }

            setLoading(true)
            const { data } = await axios.post('http://localhost:3000/api/users/login', { email, password }, config);

            localStorage.setItem('authToken', data.token)
            console.log(data);
            setError(false)
            localStorage.setItem('userInfo', JSON.stringify(data))
            setLoading(false)
            navigate('/mynotes')

        } catch (error) {
            setError(error.response.data.message)
            setLoading(false)
        }

    };



    return (
        <MainScreen title='Login'>
            <div className="loginContainer">
                {error && <ErrorMessage variant='danger'> {error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' value={email} placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button variant='primary' type='submit' className='mt-3'>
                        Submit
                    </Button>

                    <Row className='py-3'>
                        <Col>
                            New Customer? <Link to='/register'>Register</Link>
                        </Col>
                    </Row>

                </Form>
            </div>

        </MainScreen>
    )
}

export default LoginScreen