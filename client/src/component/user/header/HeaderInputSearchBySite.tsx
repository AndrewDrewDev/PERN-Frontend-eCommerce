import { ReactElement } from 'react'
import { FC } from 'react'

const HeaderInputSearchBySite: FC = (): ReactElement => {
  return (
    <div className="relative mt-6 w-11/12 max-w-lg mx-auto text-gray-600">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>
      <input
        id="userinput"
        className="w-full border border-gray-400 rounded-md pl-10 pr-4 py-2 focus:border-blue-600 focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Поиск"
      />
      <div
        id="SearctSuggestions"
        className="absolute hidden z-50 w-full mt-1 bg-white rounded-md shadow-lg overflow-auto h-64"
      ></div>
    </div>
  )
}

export { HeaderInputSearchBySite }
