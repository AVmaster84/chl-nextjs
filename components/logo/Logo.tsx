import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-center gap-2 mr-2 md:mr-0'>
        <Image src={'/camhieplong.svg'} width={40} height={40} alt='brand'/>
        <p className='text-2xl md:text-4xl font-bold'>Cam Hiep Long</p>
    </Link>
  )
}

export default Logo