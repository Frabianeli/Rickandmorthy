import React, { useEffect, useState } from 'react'
import axios from 'axios'


const useApi = () => {

    const [location, setLocation] = useState()
    const [search, setSearch] = useState()
   

    {/*----------fUNCTION SEARCH --------*/}
    const change = e =>{
        e.preventDefault()
        setSearch(e.target.search.value)
      }

      
    useEffect(() => {
        if(search){
            const URL =`https://rickandmortyapi.com/api/location/${search}`
            axios.get(URL)
                .then(res => setLocation(res.data))
                .catch(err => console.log(err))
        } else{
            const random = Math.ceil(Math.random()*126)
            const URL =`https://rickandmortyapi.com/api/location/${random}`
            axios.get(URL)
                .then(res => setLocation(res.data))
                .catch(err => console.log(err))
        }
    }, [search])

  
  return {location, change}
}

export default useApi