import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import{setInputTask, addTask, removeTask} from './redux/todosSlice.js';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.listTasks.tasks);
  const newTask = useSelector((state) => state.listTasks.newTask);

  return (
    <>
      <h1>Lista de tareas</h1>
      <input type="text" value={newTask} onChange={(e) =>  dispatch(setInputTask(e.target.value))}/>
      <button onClick={() => dispatch(addTask())}>Añadir tarea</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}
            <button onClick={() => dispatch(removeTask(i))}>Eliminar</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
