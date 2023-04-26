import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
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
        </Container>
    </div>
  )
}

export default LandingPage