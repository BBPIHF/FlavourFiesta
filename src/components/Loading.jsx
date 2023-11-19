import React from 'react'
import preloader from '../Assets/preloader.gif'

const Loading = () => {
 return (
  <div className="loader h-screen w-full flex justify-center">
    <img src={preloader} alt="loading..." className='h-[200px]' />
  </div>
 )
}

export default Loading
