import React from 'react'
import Image from 'next/image'
import scene1 from '@/public/assets/scene1.jpg'


const index = () => {
  return (
    <div >
        <Image className='image max-w-fit h-28' src={scene1} alt="image" />
    </div>
  )
}

export default index
