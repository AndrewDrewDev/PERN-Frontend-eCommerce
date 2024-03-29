import React, { FC, useState } from 'react'
import { FlexModalWrapper } from '../../../Modal/FlexModalWrapper'
import { InputFile } from '../../form/InputFile'
import { Button } from '../../../Buttons'
import { useFetching } from '../../../../hooks/useFetching'
import ProductApi from '../../../../http/ProductApi'
import { ContentLoadingSpinner } from '../../../Loaders/ContentLoadingSpinner'
import { SomethingWhenWrong } from '../../../Error/SomethingWhenWrong'
import { productEditModalState } from './ProductEditModalState'

type TProductImgButton = {
  img: string
  preview: 'true' | 'false'
}
const ProductImgButton: FC<TProductImgButton> = ({ img, preview }) => {
  const [hover, setHover] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [newImage, setNewImage] = useState<File | null>(null)
  const [updateImage, isLoading, error] = useFetching(async args => {
    const [formData] = args
    await ProductApi.updateImage(formData)
  })

  const onSubmitHandler = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('oldName', img)
    formData.append('preview', preview)
    if (newImage) formData.append('img', newImage)

    await updateImage(formData)
    setShowModal(false)
    productEditModalState.updating()
  }

  const onDeleteHandler = async () => {
    await ProductApi.deleteImageByName(img)
    await productEditModalState.updating()
    setShowModal(false)
  }

  return (
    <>
      <button
        className="relative flex items-center bg-white justify-center h-32 w-28
        border-2 border-gray-600 rounded-xl"
        onClick={() => setShowModal(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        type="button"
      >
        {hover && (
          <div
            className="absolute rounded-lg cursor-pointer
              inset-0 z-10 duration-1000 transition ease-in-out bg-black
              opacity-70 z-20"
          >
            <div className="flex h-full justify-center items-center ">
              <svg
                className="w-26 h-20 text-white p-1 border-2 rounded-full
                border-white p-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1
                  0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        )}
        <img
          className="object-contain"
          src={process.env.REACT_APP_API_URL + img}
          alt="Preview картинка"
        />
      </button>
      {showModal && (
        <FlexModalWrapper
          active={showModal}
          setActive={setShowModal}
          scale={'block'}
        >
          {isLoading && <ContentLoadingSpinner />}
          {error && <SomethingWhenWrong title={error} />}
          <div>
            <InputFile
              name="Добавление картинки"
              setValue={setNewImage}
              autoFocus={true}
            />
            <div className="flex justify-between">
              <Button
                type="button"
                content="Применить изменения"
                onClickHandler={onSubmitHandler}
              />
              <Button
                type="button"
                content="Удалить элемент"
                color="red"
                onClickHandler={onDeleteHandler}
              />
            </div>
          </div>
        </FlexModalWrapper>
      )}
    </>
  )
}

export { ProductImgButton }
