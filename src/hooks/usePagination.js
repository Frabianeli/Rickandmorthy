import React, { useEffect, useState } from 'react'

const usePagination = location => {

    const [residents, setResidents] = useState()

    const [currentPage, setCurrentPage] = useState(1)

    const [residentsPerPage, setResidentsPerPage] = useState(0)

    let itemsPerPage = 20 


    useEffect(() => {
        if(location){
          let pagination = Object.values(location?.residents);
          let result = pagination.splice(0,itemsPerPage)
          setResidents(result)
          }
      }, [location])
    

      {/*-------FUNCION NEXT PAGE -------*/}
      const nextHandler = () => {
          const totalItems = location?.residents.length;
          const nextPageResident = residentsPerPage +1;
          const nextPage = currentPage +1         
          const firstIndex = nextPageResident * itemsPerPage;
    
          if (firstIndex > totalItems )return;
          
          let pagination = Object.values(location?.residents)
          let result = pagination.splice(firstIndex, itemsPerPage)
           setResidents(result) 
           setCurrentPage(nextPage)
           setResidentsPerPage(nextPageResident)
        }
        
        {/*------FUNCTION PREVENT PAGE*/ }
        const preventHandler = () => {
          const prevPageResidents = residentsPerPage-1;
          const prevPage = currentPage-1;
          if(prevPage < 1) return;
    
          const firstIndex = prevPageResidents* itemsPerPage;
  
          let pagination = Object.values(location?.residents)
          let result = pagination.splice(firstIndex, itemsPerPage)
          setResidents(result)
          setCurrentPage(prevPage);
          setResidentsPerPage(prevPageResidents)
        }

    
  return {nextHandler, preventHandler, residents, currentPage}
}

export default usePagination