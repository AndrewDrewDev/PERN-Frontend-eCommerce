import { FC } from 'react'
import { IModalWrapper } from '../../../types'

interface IFlexModalWrapper extends IModalWrapper {
  scale?: 'screen' | 'block'
}

const FlexModalWrapper: FC<IFlexModalWrapper> = ({
  active,
  setActive,
  scale,
  children,
}) => {
  let style =
    'fixed z-50 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  '

  if (scale === 'block') {
    style += 'h-full w-full'
  } else {
    style += 'h-screen w-screen'
  }
  return (
    <>
      <div className={style} onClick={() => setActive(!active)}>
        <div
          className="relative p-5 bg-white rounded-lg ring-8 border-4 border-gray-600 ring-gray-500 overflow-auto"
          style={{
            maxHeight: '95%',
          }}
          onClick={e => e.stopPropagation()}
        >
          <button
            className="absolute top-0 right-0 mx-5 my-4 text-red-500"
            onClick={() => setActive(!active)}
            type="button"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </>
  )
}
export { FlexModalWrapper }
