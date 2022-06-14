import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loading from './Loading'

const CardResident = ({resident}) => {
    const [user, setUser] = useState()

    useEffect(() => {
        axios.get(resident)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [])
  return (
    <div className='Card'>
        <div className='Position-R'>
            {!user?
                <Loading /> :
                <img src={user?.image} alt={`icon${user?.name}`} />
                }

            <div className='ContainerInfo'>
                <h2>{user?.name}</h2>
                <ul>
                    <li>ORIGIN:</li>
                    <span>{user?.origin.name}</span>
                    <li>SPECIE:</li>
                    <span>{user?.species}</span>
                    <li>NUMBER OF EPISODES:</li>
                    <span>{user?.episode.length}</span>
                </ul>
            </div>
            <h3>
                <span className='IconColor'>
                    {user?.status === 'Alive'? '🟢': user?.status === 'Dead' ? '🔴' : '​⚫️​'}
                </span>
                {user?.status}               
            </h3>
        </div>
    </div>
  )
}

export default CardResident