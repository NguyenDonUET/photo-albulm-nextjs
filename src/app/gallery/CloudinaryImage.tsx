'use client'
import { CldImage } from 'next-cloudinary'
import { ImageProps } from 'next/image'

type CloudinaryImageProps = Omit<ImageProps, 'src'> & { imageId: string }

export default function CloudinaryImage(props: CloudinaryImageProps) {
  return <CldImage {...props} src={props.imageId} />
}
