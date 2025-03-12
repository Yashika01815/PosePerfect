import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='p-5 flex items-center justify-between'>
    <div className='items-center flex gap-2 cursor-pointer'>
        <Image src={'/newlogo.svg'} alt='logo' height={30} width={30}/>
        <h2 className='text-2xl font-bold'>PosePerfect</h2>
    </div>
    <div className='flex flex-row-reverse gap-3'>
        {/* <UserButton/> */}
        <Link href="/dashboard">
        <Button>Dashboard</Button>
        </Link>
    </div>
    </div>
  )
}

export default Navbar