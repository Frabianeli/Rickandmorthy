import { useEffect, useState } from 'react'

import './App.css'
import CardResident from './components/CardResident'
import Head from './components/Head'
import Loading from './components/Loading'
import Location from './components/Location'
import useApi from './hooks/useApi'
import usePagination from './hooks/usePagination'


function App() {
  const {location, change}= useApi()
  const {nextHandler, preventHandler, residents, currentPage} = usePagination(location)

  
  
  

    


  return (
    <div className="App">
      <div className='ContainerImg'>
        <Head />
        <form onSubmit={change}>
          <input type="text" name='search' placeholder='Location ID'/>
          <button>Search</button>
        </form>
        { !location?
          <Loading /> :
          <Location location={location}/>
          }
      </div>
      <article className='ContainerCard'>
        { !residents ?
          <Loading /> :
          residents?.map(resident => (
            <CardResident 
              resident={resident}
              key={resident}
            />
          ))
        }
      </article>
      <div className='Pagination'>
        <button onClick={preventHandler}>prevent</button>
        <h3>{currentPage}</h3>
        <button onClick={nextHandler}>next</button>
      </div> 
    </div>
  )
}

export default App
