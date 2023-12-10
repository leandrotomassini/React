// Importa el hook useReducer de React
import { useReducer } from 'react';

// Importa el tipo TodoState desde el archivo de interfaces
import { TodoState } from '../interfaces/interfaces';

// Importa el contexto TodoContext y el reducer todoReducer
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

// Estado inicial para las tareas
const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las piedras del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Recolectar las piedras del alma',
            completed: false
        },
    ],
    compelted: 0, // Parece haber un error de escritura aquí, debería ser 'completed'
    pending: 2
}

// Propiedades que se esperan en el componente TodoProvider
interface Props {
    children: JSX.Element | JSX.Element[];
}

// Componente TodoProvider que utiliza el hook useReducer para gestionar el estado de las tareas
export const TodoProvider = ({ children }: Props) => {
    
    // Usa useReducer para gestionar el estado de las tareas con el reducer todoReducer
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    // Función para cambiar el estado de una tarea
    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } });
    }

    // Proporciona el estado de las tareas y la función para cambiar el estado a través del contexto TodoContext.Provider
    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}
