import React from 'react'
import Image from 'next/image'
import copyleft from '../../public/assets/images/copyleft.png'

const Footer = () => {
  return (
    <div className='flex justify-center bg-darkColor text-lightGrey font-semibold p-6 w-full'>
        <Image src={copyleft} width={20} className='mr-2'/>
        Rapid Reads supports Copyleft
    </div>
  )
}

export default Footer
