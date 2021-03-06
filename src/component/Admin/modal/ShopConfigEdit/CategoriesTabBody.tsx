import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react'
import { categoriesPageStore } from '../../../../store/CategoryStore'
import { TCategoryInfoByLevel } from '../../../../types'
import { SomethingWhenWrong } from '../../../Error/SomethingWhenWrong'
import { FlexModalWrapper } from '../../../Modal/FlexModalWrapper'
import { Input } from '../../form/Input'
import { useFetching } from '../../../../hooks/useFetching'
import { ContentLoadingSpinner } from '../../../Loaders/ContentLoadingSpinner'
import CategoryApi from '../../../../http/CategoryApi'
import { InputFile } from '../../form/InputFile'
import { observer } from 'mobx-react-lite'
import { useDragDrop } from '../../../../hooks/useDragDrop'
import getEnvVariable from '../../../../utils/getEnvVariable'

const CategoriesTabBody: FC = observer(() => {
  const [
    categories,
    setCategories,
    dragStartHandler,
    dragOverHandler,
    dragDropHandler,
  ] = useDragDrop(categoriesPageStore.category1Info, updatedData => {
    const updateData = updatedData.map((item, i) => {
      return { name: item.name, index: ++i }
    })
    CategoryApi.updateOrder({
      data: updateData,
    }).then(() => categoriesPageStore.updateFetchData())
  })

  return (
    <>
      <h3 className="text-center text-3xl">
        <span className="font-bold">Управление Категориями</span>
      </h3>
      <hr className="border-2 rounded-full border-gray-700 my-2" />
      <div
        className="relative flex flex-col justify-center items-center
      rounded-lg"
      >
        <div
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4 my-4"
        >
          {categoriesPageStore.category1Info ? (
            categoriesPageStore.category1Info.map((categoryItem, i) => (
              <div
                onDragStart={e => dragStartHandler(e, i)}
                onDragOver={e => dragOverHandler(e, i)}
                onDrop={e => dragDropHandler(e, i)}
                key={i}
                draggable={true}
              >
                <CategoryCard {...categoryItem} />
              </div>
            ))
          ) : (
            <SomethingWhenWrong />
          )}
        </div>
      </div>
    </>
  )
})

const CategoryCard: FC<TCategoryInfoByLevel> = ({ name, count, img, url }) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        onMouseEnter={() => setShowEdit(true)}
        onMouseLeave={() => setShowEdit(false)}
        onClick={() => setShowModal(!showModal)}
        className="my-3 relative max-w-xs rounded-lg  bg-white shadow-xl
        mx-auto w-full "
      >
        <div className="relative z-20 ">
          {showEdit ? (
            <>
              <div
                className="absolute cursor-move rounded-lg cursor-pointer inset-0
                duration-1000 transition ease-in-out bg-black opacity-70 z-20"
              />
              <div
                className="absolute cursor-pointer z-20 top-1/2 left-1/2
              transform -translate-x-1/2 -translate-y-1/2 "
              >
                <button className="p-5 bg-gray-500 rounded-full">
                  <svg
                    className="w-24 h-24 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : null}

          <div
            className=" rounded-t-lg px-4 py-2 bg-blue-500 flex-auto
          relative z-10"
          >
            <h2 className="font-bold text-white text-xl text-center ">
              {name}
            </h2>
            <div className="font-bold text-white text-sm text-center">
              {count}+ Единиц Товара
            </div>
          </div>
          <div
            className=" relative flex items-center justify-center"
            style={{ minHeight: 300 + 'px' }}
          >
            <div>
              <img
                className="transform scale-100 hover:scale-110 duration-500
                ease-in-out m-auto w-full"
                src={getEnvVariable('REACT_APP_API_URL') + img}
                style={{
                  maxHeight: 300 + 'px',
                  maxWidth: 100 + '%',
                }}
                alt={name}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <FlexModalWrapper
          active={showModal}
          setActive={setShowModal}
          scale={'block'}
        >
          <EditForm categoryName={name} closeModalCallback={setShowModal} />
        </FlexModalWrapper>
      ) : null}
    </>
  )
}

type TEditForm = {
  categoryName: string
  closeModalCallback: Dispatch<SetStateAction<boolean>>
}
const EditForm: FC<TEditForm> = ({ categoryName, closeModalCallback }) => {
  const [name, setName] = useState(categoryName)
  const [img, setImg] = useState<File | null>(null)
  const [fetching, isLoading, error] = useFetching(async args => {
    const [newCategoryName, formData] = args
    await CategoryApi.updateCategoryById(
      categoryName,
      newCategoryName,
      formData
    )
  })

  const handleOnSubmit = async (event: MouseEvent) => {
    event.preventDefault()
    // Prepare data for submit
    const formData = new FormData()
    if (img) formData.append('img', img)

    // fetch data
    await fetching(name, formData)

    // update category view
    await categoriesPageStore.updateFetchData()

    // close modal
    closeModalCallback(false)
  }

  if (error) return <>{error}</> // <SomethingWhenWrong />
  if (isLoading) return <ContentLoadingSpinner />
  return (
    <>
      <form className="flex flex-col items-center">
        <h3 className="text-center text-xl font-medium border-b-2 border-gray-700">
          Редактирование категории
        </h3>
        <Input
          name="Название категории"
          value={name}
          autoFocus
          setValue={setName}
        />
        <InputFile name="Картинка категории" setValue={setImg} />
        <button
          type="submit"
          className="p-2 mt-5 text-white bg-blue-500"
          onClick={e => handleOnSubmit(e)}
        >
          Сохранить
        </button>
      </form>
    </>
  )
}

export { CategoriesTabBody }
