import React, { FC } from 'react'
import { ProductImgButton } from './ProductImgButton'
import { AddProductImgButton } from './AddProductImgButton'
import { useDragDrop } from '../../../../hooks/useDragDrop'
import ProductApi, { TUpdateOrderImagesBody } from '../../../../http/ProductApi'
import { productEditModalState } from './ProductEditModalState'

type TManageImagesPreview = {
  images: string[]
}
const ManageImagesBig: FC<TManageImagesPreview> = ({ images }) => {
  const [
    changedImages,
    setChangedImages,
    dragStartHandler,
    dragOverHandler,
    dragDropHandler,
  ] = useDragDrop(images, async updatedData => {
    const fetchData: TUpdateOrderImagesBody[] = updatedData.map((img, i) => {
      return { name: img, order: i }
    })

    await ProductApi.updateOrderImages(fetchData)

    setTimeout(() => {
      productEditModalState.updating()
    }, 200)
  })

  return (
    <>
      <div className="my-1 w-3/4">
        <h3 className="font-medium text-xl my-1 text-gray-700">
          Картинки товара:
        </h3>
        <div className="flex flex-wrap">
          {changedImages &&
            changedImages.map((img, i) => (
              <div
                draggable={true}
                onDragStart={e => dragStartHandler(e, i)}
                onDragOver={e => dragOverHandler(e, i)}
                onDrop={e => dragDropHandler(e, i)}
                className="m-2"
                key={i}
              >
                <ProductImgButton img={img} preview="false" />
              </div>
            ))}
          <div className="m-2">
            <AddProductImgButton />
          </div>
        </div>
      </div>
    </>
  )
}

export { ManageImagesBig }
