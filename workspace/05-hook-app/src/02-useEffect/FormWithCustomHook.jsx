import { useEffect } from "react";

import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);


    useEffect(() => {
        // console.log('Formstate changed!');
    }, [formState]);


    useEffect(() => {
        // console.log('Email changed!');
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

            <input
                type="password"
                className="form-control mt-4"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}
