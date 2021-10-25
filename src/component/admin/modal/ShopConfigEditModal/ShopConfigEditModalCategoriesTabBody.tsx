import { FC, FormEvent, useState } from 'react'
import config from '../../../../config'
import { categoriesPageStore } from '../../../../store/CategoryStore'
import { TCategoryInfoByLevel } from '../../../../types'
import { SomethingWhenWrong } from '../../common/SomethingWhenWrong'
import { WideModalWrapper } from '../GlobalModals'

const ShopConfigEditModalCategoriesTabBody: FC = () => {
  const categories = categoriesPageStore.category1Info

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <>
      <h3 className="text-center text-3xl">
        <span className="font-bold">Управление Категориями</span>
      </h3>
      <hr className="border-2 rounded-full border-gray-700 my-2" />
      <form
        onSubmit={e => handleOnSubmit(e)}
        className="relative flex flex-col justify-center items-center bg-gray-300 rounded-lg"
      >
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4">
          {categories ? (
            categories.map((categoryItem, i) => (
              <CategoryCard {...categoryItem} />
            ))
          ) : (
            <SomethingWhenWrong />
          )}
        </div>
      </form>
    </>
  )
}

const CategoryCard: FC<TCategoryInfoByLevel> = ({ name, count, img, url }) => {
  const [showEdit, setShowEdit] = useState(false)
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        onMouseEnter={() => setShowEdit(true)}
        onMouseLeave={() => setShowEdit(false)}
        onClick={() => setShowModal(!showModal)}
        className="flex my-3 relative max-w-xs bg-white shadow-lg rounded-lg mx-auto w-full "
      >
        <div className="relative z-20">
          {showEdit ? (
            <>
              <div className="absolute cursor-pointer inset-0 z-10 duration-1000 transition ease-in-out bg-black opacity-70 z-20"></div>
              <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
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

          <div className="px-4 py-2 bg-blue-500 flex-auto relative z-10">
            <h2 className="font-bold text-white text-xl text-center ">
              {name}
            </h2>
            <div className="font-bold text-white text-sm text-center">
              {count}+ Единиц Товара
            </div>
          </div>
          <div
            className="relative flex items-center justify-center"
            style={{ minHeight: 300 + 'px' }}
          >
            <div>
              <img
                className="transform scale-100 hover:scale-110 duration-500 ease-in-out m-auto w-full"
                src={config.REACT_API_URL + img}
                style={{
                  maxHeight: 300 + 'px',
                  maxWidth: 100 + '%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <WideModalWrapper active={showModal} setActive={setShowModal}>
          <>22323</>
        </WideModalWrapper>
      ) : null}
    </>
  )
}

export { ShopConfigEditModalCategoriesTabBody }
