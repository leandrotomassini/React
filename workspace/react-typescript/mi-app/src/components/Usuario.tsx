import { useState } from 'react';


interface IUsuario {
    uid: string;
    name: string;
}


export const Usuario = () => {

    const [user, setuser] = useState<IUsuario>();

    const login = () => {
        setuser({
            uid: 'ABC123',
            name: 'Leandro Tomassini'
        })
    }


    return (
        <div className='mt-5'>

            <h3>Usuario: useState</h3>

            <button className='btn btn-outline-primary' onClick={login}>
                Login
            </button>
            {
                (!user)
                    ? <pre>No hay usuario</pre>
                    : <pre>{JSON.stringify(user)}</pre>
            }



        </div>
    );
}
