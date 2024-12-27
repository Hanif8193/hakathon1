import React from 'react'
import Image from 'next/image'
import F1 from '../../../public/Frame 27 (2).png'
import F2 from '../../../public/Frame 28.png'
function Brands() {
  return (
    <div id='brands'>
      <div className='flex sm:flex flex-wrap  gap-4 px-10'>
       <Image src={F1}alt='F'width={350}height={350}/>
       <Image src={F2}alt='F'width={350}height={350}/>
      </div>
    </div>
  )
}

export default Brands;
