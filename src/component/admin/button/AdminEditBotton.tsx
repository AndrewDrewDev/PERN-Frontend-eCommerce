import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { shopConfigStore } from '../../../store/ShopConfigStore'

type TEditProductButton = { onClickHandler: () => void }
const AdminEditBotton: FC<TEditProductButton> = observer(
  ({ onClickHandler }) => {
    if (shopConfigStore.userAccount?.role === 'ADMIN')
      return (
        <button
          className="shadow flex items-center justify-center hover:shadow-lg 
        duration-500 p-2 rounded-full bg-red-600 hover:bg-red-500 text-white
        focus:outline-none"
          onClick={() => onClickHandler()}
          title="Редактировать товар"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        </button>
      )
    return <></>
  }
)

export { AdminEditBotton }
