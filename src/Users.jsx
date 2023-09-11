import { useEffect, useState } from "react"

export default function (){
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json() )
        .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h3>users: {users.length} </h3>
        </div>
    )
}

/* *
*1. declare a state 


*/