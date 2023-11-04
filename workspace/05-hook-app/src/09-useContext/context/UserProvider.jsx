import { UserContext } from './UserContext';

const user = {
    id: 123,
    name: 'Leandro Tomassini',
    email: 'leandro@gmail.com'
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Mundo', user }}>
            {children}
        </UserContext.Provider>
    );
}
