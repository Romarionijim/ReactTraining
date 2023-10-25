import { useEffect, useState } from "react"

const url = 'https://course-api.com/react-tours-project'

const UseEffectFetchData = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch(url)
        const json = await response.json()
        setUsers(json)
        console.log(json);
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
            <h3 >Github Users</h3>
            <ul className="user-container">
                {users.map((user) => {
                    const { id, image, name, info, price } = user
                    return <li key={id}>
                        <img src={image}></img>
                        <div>
                            <h4>{name}</h4>
                            <p>{info}</p>
                            <p>{price}</p>
                        </div>
                    </li>
                })}

            </ul>
        </>
    )
}

export default UseEffectFetchData