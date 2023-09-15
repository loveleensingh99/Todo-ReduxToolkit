import React, { useState } from 'react'
import ClearAllButton from './ClearAllButton';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../store/TaskSlice';
import appStore from '../store/store';

const TaskComponent = () => {

    const dispatch = useDispatch()


    const data = useSelector((appStore) => appStore.tasks);
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    const addTodo = () => {
        console.log('asd');
        if (task.trim() !== '') {
            dispatch(addTask(task));
            // setTodos([...todos, task]);
            setTask('');
            console.log('Done');
        }
    };

    const removeTodo = (index) => {
        dispatch(removeTask(index))

    };
    return (
        <>
            <div className="container px-24 mx-auto mt-5">
                <h1 className="mb-4 text-2xl font-semibold">To-Do List</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        placeholder="Add a new task"
                        className="w-full px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-blue-200"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button
                        className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600"
                        onClick={addTodo}
                    >
                        Add
                    </button>
                </div>
                <ul>
                    {data.map((todo, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between px-3 py-2 mb-2 border border-gray-300 rounded"
                        >
                            {todo}
                            <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => removeTodo(index)}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
                <hr />
                <ClearAllButton />

            </div>
        </>
    )
}

export default TaskComponent