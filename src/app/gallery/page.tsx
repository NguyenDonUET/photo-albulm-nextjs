import cloudinary from 'cloudinary'
import CloudinaryImage from './CloudinaryImage'
import UploadButton from './UploadButton'

type SearchResultType = {
  public_id: string
}

export default async function GalleryPage() {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('created_at', 'desc')
    .max_results(10)
    .execute()) as { resources: SearchResultType[] }

  return (
    <section>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between'>
          <h1 className='text-4xl font-bold'>Gallery</h1>
          <UploadButton />
        </div>

        <div className='grid grid-cols-4 gap-4'>
          {results.resources.map((item) => {
            return (
              <CloudinaryImage
                key={item.public_id}
                alt='image'
                imageId={item.public_id}
                fill
                className='object-cover rounded-sm'
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
