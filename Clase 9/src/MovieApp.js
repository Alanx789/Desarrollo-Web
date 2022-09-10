import React from 'react'
/* import { Navbar } from './Components/Navbar';
import { useFetchTrending } from './Hooks/useFetchTrending' */
import { AppRoutes } from './Routers/AppRoutes'

export const MovieApp = () => {

/*   const{movies, isLoading} = useFetchTrending();
  console.log('movies', movies) */

  return(

    <>
      {/* <p>{`${isLoading ? 'Esta cargando' : 'Ya cargo'}`}</p> */}
      <AppRoutes/>
    </>

  )

}
