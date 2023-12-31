import { useState, useEffect } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('please add task')
            return
        }

        onAdd({ text, day, reminder })
        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="add task" value={text}
                    onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="add day and time" value={day}
                    onChange={(e) => setDay(e.target.value)}  ></input>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" placeholder="add reminder"
                    value={reminder}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>

            <input className="btn btn-block" type="submit" value="Save Task"></input>
        </form>
    )
}

export default AddTask