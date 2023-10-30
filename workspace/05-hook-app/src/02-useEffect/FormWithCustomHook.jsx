import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, userName, email, password } = useForm({
        userName: '',
        email: '',
        password: ''
    });



    return (
        <>
            <h1>Formulario con custom hook</h1>

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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className='btn btn-primary mt-2' onClick={onResetForm}>Borrar</button>
        </>
    )
}
