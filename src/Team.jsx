import { useState } from "react"

export default function Team(){
    const teamStyle = {
        border: '2px solid blue',
        marginBottom: '50px',
        padding: '10px',
        borderRadius: '15px'
    }

    const [team, setTeam] = useState(11)



    const addPlayer = () => { 
        const newPlayer = team + 1
        setTeam(newPlayer)
    }

    const removePlayer = () =>{
        const removeP = team - 1
        setTeam(removeP)
    }



    return (


        <div  style={teamStyle}>
            <h2>Team Member: {team}</h2>
            <button onClick={addPlayer}>Add player</button>
            <button onClick={removePlayer}>Remove player</button>
        </div>
    )
}