import { useForm } from '../hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number;
}


export const Formulario = () => {

    const { formulario, handleChange } = useForm<FormData>({
        email: 'leandro@gmail.com',
        nombre: 'Leandro Tomassini',
        edad: 30
    });

    const { email, nombre, edad } = formulario;

    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                />
            </div>

            <pre>
                {JSON.stringify(formulario)}
            </pre>

        </form>
    );
}
