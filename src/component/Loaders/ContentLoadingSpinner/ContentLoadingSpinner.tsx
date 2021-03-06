import { ReactElement, FC } from 'react'
import cn from 'classnames'

interface IContentLoadingSpinnerProps {
  color?: 'white' | 'black'
}

const ContentLoadingSpinner: FC<IContentLoadingSpinnerProps> = ({
  color,
}): ReactElement => {
  if (!color) color = 'black'

  return (
    <>
      <div className="flex justify-center">
        <svg
          className={cn('fill-current h-24 w-24 my-20 animate-spin', {
            'text-gray-600': color === 'black',
            'text-white': color === 'white',
          })}
          viewBox="0 0 904 960"
        >
          <path d="M328 128C328 57.308 385.308 0 456 0s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zm271.53 112.47c0-70.692 57.308-128 128-128s128 57.308 128 128c0 70.692-57.308 128-128 128s-128-57.308-128-128zM776 512c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM663.53 783.53c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zM392.002 896c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zm-271.53-112.47c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64zm-32-543.06c0-53.019 42.981-96 96-96s96 42.981 96 96-42.98 96-96 96-96-42.981-96-96zM0 512c0-39.765 32.235-72 72-72s72 32.235 72 72-32.235 72-72 72-72-32.235-72-72z" />
        </svg>
      </div>
    </>
  )
}

export { ContentLoadingSpinner }
