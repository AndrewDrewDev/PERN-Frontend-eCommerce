import React, { FC, useState } from 'react'
import { FlexModalWrapper } from '../../../user/modal/FlexModalWrapper'
import { FormInputFile } from '../../form/FormInputFile'
import BlueButton from '../../button/BlueButton'
import { useFetching } from '../../../../hooks/useFetching'
import ProductApi from '../../../../http/ProductApi'
import { productEditModalState } from './ProductEditModalState'
import Spinner from '../../../user/common/Spinner'
import { SomethingWhenWrong } from '../../../user/common/SomethingWhenWrong'
type TAddProductImgButton = {
  productId: string
}
const AddProductImgButton: FC<TAddProductImgButton> = ({ productId }) => {
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
          {isLoading && <Spinner />}
          {error && <SomethingWhenWrong title={error} />}
          <div>
            <FormInputFile
              name="Добавление картинки"
              setValue={setNewImage}
              autoFocus={true}
            />
            <BlueButton
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
