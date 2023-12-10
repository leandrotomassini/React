import { useForm } from '../hooks/useForm';



export const Formulario = () => {

    const { formulario, handleChange } = useForm({
        postal: '',
        ciudad: ''
    });

    return (
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-label">Código postal:</label>
                <input
                    type="text"
                    className="form-control"
                    name="postal"
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input
                    type="text"
                    className="form-control"
                    name="ciudad"
                    onChange={handleChange}
                />
            </div>

            <pre>
                {JSON.stringify(formulario)}
            </pre>

        </form>
    );
}
