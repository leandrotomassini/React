// Importa la función createContext de React
import { createContext } from 'react';

// Importa el tipo TodoState desde el archivo de interfaces
import { TodoState } from '../interfaces/interfaces';

// Define el tipo para las propiedades del contexto
export type TodoContextProps = {
    todoState: TodoState;             // Estado de las tareas
    toggleTodo: (id: string) => void;  // Función para cambiar el estado de una tarea por su ID
}

// Crea un contexto de React con un valor inicial vacío del tipo TodoContextProps
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);
