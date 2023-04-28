import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import LandingPage from './screens/LandingPage/LandingPage.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes.jsx';
import LoginScreen from './screens/LoginScreen/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes> {/* Use Routes component */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/mynotes" element={<MyNotes />} />
                    <Route path="/register" element={<RegisterScreen />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
