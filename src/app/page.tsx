'use client'

import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

export default function Home() {
  const [imageId, setImageId] = useState('i47tyfycpm576pi5cegs')

  return (
    <main className='min-h-screen '>
      <CldImage
        width='400'
        height='300'
        src={imageId}
        sizes='100vw'
        alt='Description of my image'
      />
    </main>
  )
}
