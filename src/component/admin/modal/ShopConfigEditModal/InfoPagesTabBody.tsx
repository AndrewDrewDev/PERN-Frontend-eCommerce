import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import { FlexModalWrapper } from '../../../user/modal/FlexModalWrapper'
import infoApi from '../../../../http/infoApi'
import { FormInput } from '../../form/FormInput'
import { FormTextArea } from '../../form/FormTextArea'
import Button from '../../../user/button/Button'

const InfoPagesTabBody: FC = () => {
  const [selectedCategoryUrl, setSelectedCategoryUrl] = useState('')
  const [showModal, setShowModal] = useState(false)
  const pages = [
    {
      name: 'О магазине',
      url: 'about',
    },
    {
      name: 'Oплата',
      url: 'payment',
    },
    {
      name: 'Доставка',
      url: 'delivery',
    },
    {
      name: 'Договор публичной оферты',
      url: 'public-offer',
    },
    {
      name: 'FAQs :: Вопросы-Ответы',
      url: 'faqs',
    },
  ]

  return (
    <>
      <div className="relative">
        <h3 className="text-center text-3xl">
          <span className="font-bold">Редактирование Info Pages</span>
        </h3>
        <hr className="border-2 rounded-full border-gray-700 my-2" />
        <div className="py-48 flex flex-col justify-center items-center bg-gray-300 rounded-lg">
          {pages.map(i => (
            <PageButton
              name={i.name}
              url={i.url}
              setSelectCategoryUrl={setSelectedCategoryUrl}
              setShowModal={setShowModal}
            />
          ))}
          {showModal && (
            <FlexModalWrapper
              active={showModal}
              setActive={setShowModal}
              scale={'block'}
            >
              <EditForm
                categoryUrl={selectedCategoryUrl}
                closeModal={setShowModal}
              />
            </FlexModalWrapper>
          )}
        </div>
      </div>
    </>
  )
}

type TEditForm = {
  categoryUrl: string
  closeModal: Dispatch<SetStateAction<boolean>>
}
const EditForm: FC<TEditForm> = ({ categoryUrl, closeModal }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', name)
    formData.append('content', content)

    await infoApi.updateInfoPagesData(categoryUrl, formData)
    closeModal(false)
  }

  useEffect(() => {
    infoApi.fetchInfoPagesData(categoryUrl).then(data => {
      setName(data.name)
      setContent(data.content)
    })
  }, [])

  return (
    <>
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={e => submitHandler(e)}
        style={{
          width: '60rem',
        }}
      >
        <h3 className="text-center text-xl font-medium border-b-2 border-gray-700">
          Редактирование страницы
        </h3>
        <FormInput
          name="Название страницы"
          value={name}
          setValue={setName}
          autoFocus={true}
        />
        <FormTextArea name="Контент" value={content} setValue={setContent} />
        <div className="flex items-center justify-center">
          <Button type="submit" content="Применить изменения" />
        </div>
      </form>
    </>
  )
}

type TPageButton = {
  name: string
  url: string
  setSelectCategoryUrl: Dispatch<SetStateAction<string>>
  setShowModal: Dispatch<SetStateAction<boolean>>
}
const PageButton: FC<TPageButton> = ({
  name,
  url,
  setSelectCategoryUrl,
  setShowModal,
}) => {
  return (
    <>
      <button
        className="my-3 w-96 text-center text-lg font-medium shadow-lg
      duration-500 px-5 py-2 text-white bg-blue-500 border-2 border-blue-600
      rounded-lg hover:bg-blue-600 "
        onClick={() => {
          setSelectCategoryUrl(url)
          setShowModal(true)
        }}
      >
        {name}
      </button>
    </>
  )
}

export { InfoPagesTabBody }
