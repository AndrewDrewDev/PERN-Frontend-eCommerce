import { ReactElement, FC } from 'react'

const Spinner: FC = (): ReactElement => {
  return (
    <>
      <div className="flex justify-center">
        <svg
          className="text-gray-600 fill-current h-48 w-48 my-20 animate-spin"
          viewBox="0 0 16 16"
        >
          <path d="M8 0c-4.355 0-7.898 3.481-7.998 7.812 0.092-3.779 2.966-6.812 6.498-6.812 3.59 0 6.5 3.134 6.5 7 0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-4.418-3.582-8-8-8zM8 16c4.355 0 7.898-3.481 7.998-7.812-0.092 3.779-2.966 6.812-6.498 6.812-3.59 0-6.5-3.134-6.5-7 0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5c0 4.418 3.582 8 8 8z"></path>
        </svg>
      </div>
    </>
  )
}

export default Spinner
