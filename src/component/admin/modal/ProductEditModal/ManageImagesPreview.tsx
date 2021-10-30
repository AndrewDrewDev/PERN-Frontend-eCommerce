import React, { FC } from 'react'
import { ProductImgButton } from './ProductImgButton'

type TManageImagesPreview = {
  preview: string
}
const ManageImagesPreview: FC<TManageImagesPreview> = ({ preview }) => {
  return (
    <>
      <div className="my-5 w-3/4">
        <h3 className="font-medium text-lg text-gray-700">Preview картинка:</h3>
        <div className="">
          <ProductImgButton img={preview} />
        </div>
      </div>
    </>
  )
}

export { ManageImagesPreview }
