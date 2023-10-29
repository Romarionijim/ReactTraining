import Header from "./Header"
import './travis.css'
import Tasks from "./Tasks"
import { useState, useEffect } from 'react'
import AddTask from "./AddTask"

const TravisApp = () => {
    const [tasks, setTasks] = useState([])
    const [showAddTask, setShowAddTask] = useState(false)

    const fetchTasksFromServer = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    useEffect(() => {
        fetchTasksFromServer()
    }, [])

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const restoreTasks = async () => {
        const data = await fetchTasksFromServer();
        setTasks(data)
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        console.log(id);
        const newTask = { id, ...task }
        setTasks([...tasks, newTask])
    }

    return (
        <div className="container">
            <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}
                onToggle={toggleReminder} />) :
                <button onClick={restoreTasks}>Restore Tasks</button>}
        </div>
    )
}

export default TravisApp
