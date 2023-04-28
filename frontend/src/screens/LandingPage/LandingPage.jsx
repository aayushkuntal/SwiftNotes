import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import LandingPageLogo from './LandingPageLogo.jsx';
import { useEffect } from 'react';
// import { createBrowserHistory } from "history";

const LandingPage = () => {
    // const history = createBrowserHistory();
    // useEffect(() => {
    //     const userInfo=localStorage.getItem('userInfo')
    //     if(userInfo){
    //         history.push('/mynotes')
    //     }
    // },[history])

    return (
        <div className='main'>
            <Container>
                <div className='mainbox'>
                    {/* <Row>
                        <LandingPageLogo />
                    </Row> */}
                    <Row>
                        <div className="intro-text">
                            <div>
                                <h1 className='title'>Organize your notes, todos, and tasks all in one place</h1>
                                <p className='subtitle'>Quickly jot down notes that you can access from anywhere.</p>
                            </div>
                            <div className="buttonContainer">
                                <a href="/login">
                                    <Button size='lg' className='landingbutton'>
                                        Login
                                    </Button>
                                </a>
                                <a href="/register">
                                    <Button variant='primary-outline'
                                        size='lg' className='landingbutton'>
                                        SignUp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Row>
                </div>


            </Container>
        </div>
    )
}

export default LandingPage