
import React, { useEffect, useState } from 'react'

const Location = ({location}) => {

    

  return (
    <div className='ContainerLocation'>
        <div className='Location'>
          <h1>{location?.name}</h1>
          <ul>
              <li><span>Type: </span>{location?.type}</li>
              <li><span>Dimension: </span>{location?.dimension}</li>
              <li><span>Population: </span>{location?.residents.length}</li>
          </ul> 
        </div>
    </div>
  )
}

export default Location