import React, { useState, useEffect } from "react"

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth)
    console.log(size);

    const checkSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize)
        console.log('hello clean');
        return () => {
            console.log('cleanup');
            window.removeEventListener('resize', checkSize)
        }
    })
    return (
        <>
            <h1>Hello</h1>
            <h2>window size is {size}</h2>
        </>
    )
}

export default UseEffectCleanup