'use client'
import HeartIcon from '@/components/icons/HeartIcon'
import { CldImage } from 'next-cloudinary'
import { ImageProps } from 'next/image'
import { setAsFavoriteAction } from './actions'
import { useState, useTransition } from 'react'
import FilledHeartIcon from '@/components/icons/FilledHeartIcon'
type CloudinaryImageProps = Omit<ImageProps, 'src'> & {
  imageId: string
  isFavorite: boolean
}

export default function CloudinaryImage({
  imageId,
  isFavorite,
  ...props
}: CloudinaryImageProps) {
  const [favorite, setFavorite] = useState(isFavorite)

  const handleClick = async (favoriteVal: boolean) => {
    try {
      setFavorite(favoriteVal)
      await setAsFavoriteAction(imageId, favoriteVal)
    } catch (error) {
      console.log(`🚀 ~ error:`, error)
      setFavorite(!favoriteVal)
    }
  }

  return (
    <div className='max-w-[500px] h-[400px] relative'>
      <CldImage {...props} src={imageId} />
      <b>{favorite ? 'true' : 'false'}</b>
      {favorite ? (
        <FilledHeartIcon
          onClick={() => handleClick(false)}
          className='absolute top-2 right-2 h-8 w-8 hover:cursor-pointer hover:text-white text-red-500 '
        />
      ) : (
        <HeartIcon
          onClick={() => handleClick(true)}
          className='absolute top-2 right-2 h-8 w-8 hover:cursor-pointer hover:text-red-500'
        />
      )}
    </div>
  )
}
