import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Header() {
  return (
    <div className='border-b'>
      <div className='container mx-auto flex h-16 items-center px-4'>
        PHOTO ALBUM
        <div className='ml-auto flex items-center space-x-4'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}
