import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='h-14 bg-red-400 flex justify-center items-center text-white text-2xl' >
      
      <Link href={`/`}>Pokemon</Link>
      
    </div>
  )
}

export default Navbar
