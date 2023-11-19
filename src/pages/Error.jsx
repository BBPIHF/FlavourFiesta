import React from 'react'
import { Link } from 'react-router-dom'
import error from '../Assets/error-img.jpg'
const Error = () => {
  return (
    <section className="error-page section mt-10">
      <div className="text-center leading-10">
        <div className="img-container">
           <img src={error} alt="erro-image" className=''/>
        </div>
        

        <Link to='/' className='bg-secondary p-3 text-white hover:opacity-90'>
          back home
        </Link>
        
      </div>
    </section>
  )
}

export default Error
