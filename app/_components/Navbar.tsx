import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='p-4 flex items-center justify-between'>
    <div className='items-center flex gap-3'>
        <Image src={'/newlogo.svg'} alt='logo' height={30} width={30}/>
        <h2 className='text-2xl font-bold'>YourReel</h2>
    </div>
    <div className='flex flex-row-reverse gap-3'>
        {/* <UserButton/>
        <Link href="/dashboard">
        <Button>Dashboard</Button>
        </Link> */}
    </div>
    </div>
  )
}

export default Navbar