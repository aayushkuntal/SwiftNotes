import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LandingPage from './screens/LandingPage/LandingPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes> {/* Use Routes component */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/mynotes" element={<MyNotes />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
