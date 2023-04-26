import React from 'react';
import MainScreen from '../../components/MainScreen';
import { Link } from 'react-router-dom';
import { Badge, Button, Card, Accordion } from 'react-bootstrap';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import axios from 'axios';
import { useState,useEffect } from 'react';

const MyNotes = () => {
    const customButtonStyles = {
        fontSize: '20px', // Customize the font size
        padding: '6px 14px', // Customize the padding
        marginLeft: 20,
        marginBottom: 6,
    };
    const titleStyle = {
        color: 'black',
        textDecoration: 'none',
        flex: 1,
        cursor: 'pointer',
        alignSelf: 'center',
        fontSize: 18, // Update the font size to a smaller value, e.g. 16px
    };
    const deleteHandler = (id) => {
        if (window.confirm('Are you sure?')) {
            // Delete note
        }
    };

    //Getting notes from backend
    
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        const { data } = await axios.get('http://localhost:3000/api/notes/');
        setNotes(data);
    }

    useEffect(() => {
        fetchNotes();
    }, [])
    

    return (
        <MainScreen title="Welcome back Aayush Kuntal">
            <Link to="createnote">
                <Button style={customButtonStyles} size="lg">
                    CREATE NEW NOTE
                </Button>
            </Link>

            {notes.map((note) => (
                <Accordion key={note._id}>
                    <Accordion.Item eventKey="0" style={{ margin: 10, border: 'none' }}>
                        <Card style={{ margin: 10 }}>
                            <Card.Header style={{ display: 'flex' }}>
                                <span style={titleStyle}>
                                    <AccordionHeader variant="link" >
                                        {note.title}
                                    </AccordionHeader>
                                </span>

                                <div>
                                    <Button href={`/note/${note._id}`} variant='primary'>Edit</Button>
                                    <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                                </div>
                            </Card.Header>
                            <Accordion.Body>
                                <Card.Body>
                                    <h4>
                                        <Badge pill bg="success" style={{ fontSize: '16px' }}>
                                            Category-{note.category}
                                        </Badge>
                                    </h4>
                                    <blockquote
                                        className="blockquote mb-0"
                                        style={{ fontSize: '18px' }}
                                    >
                                        <p>{note.content}</p>
                                        <footer className="blockquote-footer">
                                            Created on : Date
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion.Item>
                </Accordion>
            ))}
        </MainScreen>
    );
};

export default MyNotes;
