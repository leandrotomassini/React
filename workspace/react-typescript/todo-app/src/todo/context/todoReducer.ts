// Importa los tipos Todo y TodoState desde el archivo de interfaces
import { Todo, TodoState } from '../interfaces/interfaces';

// Define un tipo de acción para el reducer
type TodoAction =
    | { type: 'addTodo', payload: Todo }           // Acción para agregar una tarea
    | { type: 'toggleTodo', payload: { id: string } }; // Acción para cambiar el estado de una tarea

// Define el reducer para gestionar el estado de las tareas
export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    
    // Utiliza un switch para manejar diferentes tipos de acciones
    switch (action.type) {
        // Caso para la acción 'addTodo'
        case 'addTodo':
            // Retorna un nuevo estado con la nueva tarea agregada
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        // Caso para la acción 'toggleTodo'
        case 'toggleTodo':
            // Retorna un nuevo estado con el estado de la tarea cambiado
            return {
                ...state,
                todos: state.todos.map(({ ...todo }) => {
                    // Si el ID de la tarea coincide con el ID proporcionado en la acción
                    if (todo.id === action.payload.id) {
                        // Cambia el estado de completado de la tarea
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            };

        // Caso por defecto: retorna el estado actual si la acción no es reconocida
        default:
            return state;
    }
};
