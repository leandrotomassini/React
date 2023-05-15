import { Navigate, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserProvides";

import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { NavBar } from './NavBar';


export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Main app</h1>

            <NavBar />

            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </UserProvider>
    )
}
