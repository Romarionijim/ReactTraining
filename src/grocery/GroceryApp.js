import React, { useState, useEffect } from 'react'
import List from './List'

const GroceryApp = () => {
    const [name, setName] = useState('')
    const [list, setList] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editID, setEditID] = useState(null)
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

    return (
        <section className='section-center'>
            <div className='grocery-container'>
                <List />
            </div>
        </section>
    )
}

export default GroceryApp