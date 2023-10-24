import React, { useState, useEffect } from "react"

const UseEffectBasis = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('call useEffect');
        if (value > 0) {
            document.title = `count: ${value}`
        }
    }, [value])

    useEffect(() => {
        console.log('helloo second useFFect');
    }, [])
    

    console.log('render component');

    return (
        <>
            <h1>{value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>Cliq</button>
        </>
    )
}

export default UseEffectBasis
