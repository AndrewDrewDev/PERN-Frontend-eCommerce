import { FC } from 'react'
import { IModalWrapper } from '../../../types'

const WideModalWrapper: FC<IModalWrapper> = ({
  active,
  setActive,
  children,
}) => {
  return (
    <>
      <div
        className="fixed  inset-0 w-full h-screen flex justify-center items-center z-50 bg-black bg-opacity-50 duration-300 overflow-y-hidden "
        onClick={() => setActive(false)}
      >
        <div
          className="relative transition transform opacity-0 opacity-100 ease-in-out duration-1000 text-gray-700 bg-white my-5 py-5 px-5 rounded w-11/12
            md:w-4/5 overflow-auto"
          onClick={e => e.stopPropagation()}
          style={{
            maxHeight: '95%',
          }}
        >
          {children}
        </div>
      </div>
    </>
  )
}
export { WideModalWrapper }
