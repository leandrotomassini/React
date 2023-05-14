import { useEffect, useState } from "react";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'leandro',
        email: "leandro@gmail.com"
    });

    
    const { username, email } = formState;


    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('useEffect called!');
    }, []);


    useEffect(() => {
        console.log('Formstate changed!');
    }, [formState]);


    useEffect(() => {
        console.log('Email changed!');
    }, [email]);


    return (
        <>

            <h1>Fomulario simple</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-4"
                placeholder="test@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        </>
    )
}
