import React, { FC } from 'react'
import { ProductImgButton } from './ProductImgButton'

type TManageImagesPreview = {
  image: string
}
const ManageImagesPreview: FC<TManageImagesPreview> = ({ image }) => {
  return (
    <>
      <div className="my-1 w-3/4">
        <h3 className="font-medium text-xl my-1 text-gray-700">
          Preview картинка:
        </h3>
        <ProductImgButton img={image} preview="true" />
      </div>
    </>
  )
}

export { ManageImagesPreview }
