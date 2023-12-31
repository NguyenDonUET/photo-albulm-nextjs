'use client'
import { Button } from '@/components/ui/button'
import HeartIcon from './icons/HeartIcon'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

enum Paths {
  gallery = '/gallery',
  favorites = '/favorites',
  album = '/albums',
}
export default function SideMenu() {
  const pathName = usePathname()

  const getActiveLinkStyle = (path: string): 'secondary' | 'ghost' => {
    return path === pathName ? 'secondary' : 'ghost'
  }

  return (
    <div className={'pb-12 w-1/5'}>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Manage
          </h2>
          <div className='space-y-1'>
            <Link href={'/gallery'}>
              <Button
                variant={getActiveLinkStyle(Paths.gallery)}
                className='w-full justify-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='mr-2 h-4 w-4'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
                </svg>
                Gallery
              </Button>
            </Link>
            <Button
              variant={getActiveLinkStyle(Paths.album)}
              className='w-full justify-start'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-4 w-4'>
                <rect width='7' height='7' x='3' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='3' rx='1' />
                <rect width='7' height='7' x='14' y='14' rx='1' />
                <rect width='7' height='7' x='3' y='14' rx='1' />
              </svg>
              Albums
            </Button>
            <Link href={Paths.favorites}>
              <Button
                variant={getActiveLinkStyle(Paths.favorites)}
                className='w-full justify-start'>
                <HeartIcon />
                Favorites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
