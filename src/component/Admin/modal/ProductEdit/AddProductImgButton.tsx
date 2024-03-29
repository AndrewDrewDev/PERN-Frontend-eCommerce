import React, { FC, useState } from 'react'
import { FlexModalWrapper } from '../../../Modal/FlexModalWrapper'
import { InputFile } from '../../form/InputFile'
import { Button } from '../../../Buttons'
import { useFetching } from '../../../../hooks/useFetching'
import ProductApi from '../../../../http/ProductApi'
import { productEditModalState } from './ProductEditModalState'
import { ContentLoadingSpinner } from '../../../Loaders/ContentLoadingSpinner'
import { SomethingWhenWrong } from '../../../Error/SomethingWhenWrong'

const AddProductImgButton: FC<{
  productId: string
}
  > = ({ productId }) => {
  const [showModal, setShowModal] = useState(false)
  const [newImage, setNewImage] = useState<File | null>(null)
  const [fetchAddImage, isLoading, error] = useFetching(async args => {
    const [productId, formData] = args
    await ProductApi.addImageById(productId, formData)
  })

  const onSubmitHandler = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    if (newImage) {
      formData.append('img', newImage)
    }

    await fetchAddImage(productId, formData)

    productEditModalState.updating()
    setShowModal(false)
  }

  return (
    <>
      <button
        className="flex items-center justify-center h-32 w-28 border-2 border-gray-600 rounded-xl border-dashed"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="text-gray-600 border-blue-600 bg-gray-400 rounded-full">
          <svg
            className="w-20 h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </button>
      {showModal && (
        <FlexModalWrapper
          active={showModal}
          setActive={() => setShowModal(false)}
          scale="block"
        >
          {isLoading && <ContentLoadingSpinner />}
          {error && <SomethingWhenWrong title={error} />}
          <div>
            <InputFile
              name="Добавление картинки"
              setValue={setNewImage}
              autoFocus={true}
            />
            <Button
              type="button"
              content="Применить изменения"
              onClickHandler={onSubmitHandler}
            />
          </div>
        </FlexModalWrapper>
      )}
    </>
  )
}

export { AddProductImgButton }
