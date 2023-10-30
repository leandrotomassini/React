import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        userName: 'strider',
        email: 'fernando@google.com'
    });

    const { userName, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        // console.log('use effect called!')
    }, []);

    useEffect(() => {
        // console.log('formState change')
    }, [formState]);

    useEffect(() => {
        // console.log('email change')
    }, [email]);


    useEffect(() => {



        return () => {

        }
    }, []);


    return (
        <>
            <h1>Formulario simple</h1>

            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (userName === 'strider2') && <Message />
            }


        </>
    )
}
