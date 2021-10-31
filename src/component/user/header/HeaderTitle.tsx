import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { AdminEditBotton } from '../../admin/button/AdminEditBotton'
import { modalStateStore } from '../../../store/ModalStateStore'

type TProps = {
  title: string
  subtitle: string
  address: string
  phone: string
}

const HeaderTitle: FC<TProps> = ({
  title,
  subtitle,
  address,
  phone,
}: TProps): ReactElement => {
  return (
    <div className="block">
      <div className="flex justify-center items-center w-full text-gray-700 text-center text-2xl md:text-3xl font-semibold">
        <Link to="/">{title}</Link>
        <div className="ml-3">
          <AdminEditBotton
            onClickHandler={() =>
              (modalStateStore.shopConfigEditModalState.isShowing = true)
            }
          />
        </div>
      </div>
      <div className="w-full text-gray-700 text-center text-lg md:text-xl font-oswald md:whitespace-nowrap">
        {subtitle}
      </div>
      <div className="w-full text-gray-600 text-xs flex md:text-sm md:flex md:items-center justify-center">
        <svg
          className="h-5 w-5 mt-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
            fill="currentColor"
          />
        </svg>
        <span className="mx-1 mt-2 whitespace-nowrap">{address}</span>
        <svg
          className="w-5 h-5 mt-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="mx-1 mt-2 whitespace-nowrap">{phone}</span>
      </div>
    </div>
  )
}

export { HeaderTitle }
