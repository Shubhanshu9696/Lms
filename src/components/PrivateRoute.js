import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({isLogedIn , children}) => {
        
    if(isLogedIn){
        // console.log(isLogedIn)
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }

}



// export default PrivateRoute