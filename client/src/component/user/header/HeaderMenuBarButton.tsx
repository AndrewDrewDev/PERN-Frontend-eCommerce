import { FC, ReactElement } from 'react'

const HeaderMenuBarButton: FC = (): ReactElement => {
  return (
    <div className="w-full text-gray-600 md:flex md:items-center">
      <div className="flex">
        <button
          type="button"
          className="fixed -mt-3 md:-mt-2 text-gray-700 hover:text-gray-600 rounded-lg duration-500 focus:outline-none focus:text-gray-600 z-30"
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zs"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export {
  HeaderMenuBarButton
}