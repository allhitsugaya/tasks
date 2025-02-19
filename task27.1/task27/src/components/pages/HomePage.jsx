import {useContext, useState} from "react";
import data from '../data.js';
import {ThemeContext} from "../theme/Theme.jsx";


export const HomePage = () => {
        const [theme] = useContext(ThemeContext);
        const [task, setTask] = useState('');
        const [isTask, setIsTask] = useState(data);
        const handleSubmit = (event) => {
            event.preventDefault();
            if (!task) return;
            const fakeId = Date.now();
            const newTask = { id: fakeId, task };
            const updatedTask = [...isTask, newTask];
            setIsTask(updatedTask);
            setTask('');
        };
        const removeUser = (id) => {
            const updatedTask = isTask.filter((person)=>person.id !== id);
            setIsTask(updatedTask);
        }
        return (
            <div className="homepage">
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-row'>
                        <label htmlFor='name' className='form-label'>
                            Put your tasks:
                        </label>
                        <input type='text' className='form-input' id='name' value={task} onChange={(e) => setTask(e.target.value)}  />
                    </div>
                    <button type='submit' className={`submit submit-${theme}`} >Submit</button>
                </form>
                <h4>Tasks:</h4>
                {isTask.map((task) => {
                    return (
                        <div key={task.id}>
                            <h4>{task.task}
                                <button className="remove" onClick={() => removeUser(task.id)}>Remove</button>
                            </h4>
                        </div>)
                })}
            </div>
        );
    };

export default HomePage;
