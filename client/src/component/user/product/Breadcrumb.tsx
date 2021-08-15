import { ReactElement } from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'

type TBreadcrumb = {
  category1: string
  category1EN: string
  category2: string
  category2EN: string
  category3: string
  category3EN: string
  finalName: string
}

type TBreadcrumbItem = {
  name: string
  url: string
}

const Breadcrumb: FC<TBreadcrumb> = ({
  category1,
  category1EN,
  category2,
  category2EN,
  category3,
  category3EN,
  finalName,
}): ReactElement => {
  const Arrow: ReactElement = (
    <svg
      className="fill-current w-3 h-3 mx-3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
    </svg>
  )

  const BreadcrumbItem: FC<TBreadcrumbItem> = ({ name, url }): ReactElement => {
    return (
      <li className="flex mt-2 md:mt-0 items-center text-gray-700 hover:underline">
        <Link className="truncate" to={url}>
          {name}
        </Link>
        {Arrow}
      </li>
    )
  }

  return (
    <>
      <nav
        className="text-black font-bold my-3 container mx-auto"
        aria-label="Breadcrumb"
      >
        <ol className="list-none md:inline-flex p-0 max-w-full">
          <li className="flex mt-2 md:mt-0 items-center text-gray-800 hover:underline">
            <Link
              className="border rounded-lg border-white hover:border-gray-400"
              to="/"
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </Link>
            {Arrow}
          </li>
          <li className="flex mt-2 md:mt-0 items-center text-gray-700 hover:underline">
            <Link className="truncate" to="#">
              Каталог товаров
            </Link>
            {Arrow}
          </li>
          <BreadcrumbItem name={category1} url={category1EN} />
          {category2 ? (
            <BreadcrumbItem name={category2} url={category2EN} />
          ) : null}
          {category3 ? (
            <BreadcrumbItem name={category3} url={category3EN} />
          ) : null}
          <li className="mt-2 md:mt-0 truncate text-gray-600">{finalName}</li>
        </ol>
      </nav>
    </>
  )
}

export { Breadcrumb }
