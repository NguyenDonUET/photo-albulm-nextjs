'use client'
import { Button } from '@/components/ui/button'
import { CldUploadButton } from 'next-cloudinary'

export default function Home() {
  return (
    <main className='min-h-screen '>
      <CldUploadButton uploadPreset='qhjicysu' />

      <Button>Click me</Button>
    </main>
  )
}
