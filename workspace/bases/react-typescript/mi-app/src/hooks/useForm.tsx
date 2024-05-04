import { ChangeEvent, useState } from 'react';


export function useForm<T>(initState: T) {

    const [formulario, setformulario] = useState(initState);

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = target;

        setformulario({
            ...formulario,
            [name]: value
        });
    }

    return {
        formulario,
        handleChange
    }
}