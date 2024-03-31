import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const BackButton = ({location}) => {
  return (
   <div className='container-fluid p-5 mt-5'>
    <Link to={location} className='btn btn-light btn-md'>
     <KeyboardDoubleArrowLeftIcon/> Back
    </Link>
    </div>
  
  )
}

export default BackButton
