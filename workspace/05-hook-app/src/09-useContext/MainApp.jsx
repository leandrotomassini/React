import { Routes, Route, Navigate } from 'react-router-dom';

import { UserProvider } from './context/UserProvider';

import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const MainApp = () => {
    return (

        <UserProvider>

            <h1>MainApp</h1>

            <NavBar />

            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path='/*' element={<Navigate to={'/about'} />} />
            </Routes>
        </UserProvider>
    );
}
