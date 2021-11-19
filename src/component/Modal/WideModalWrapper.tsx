import { FC } from 'react'
import { IModalWrapper } from '../../types'
import { animated, useTransition } from 'react-spring'
import { nanoid } from 'nanoid'
import { Breadcrumb } from '../Product/Breadcrumb'
import { ProductSlider } from '../Product/ProductSlider'

const WideModalWrapper: FC<IModalWrapper> = ({
  active,
  setActive,
  children,
}) => {
  const transitionModal = useTransition(active, {
    from: { y: -50, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: 50, opacity: 0 },
  })
  const transitionBackground = useTransition(active, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <>
      {transitionBackground(
        (style, item) =>
          item && (
            <animated.div
              className="fixed inset-0 w-full h-screen flex justify-center
                items-center z-50 bg-black bg-opacity-50 overflow-y-hidden"
              onClick={() => setActive(false)}
              key={nanoid()}
              style={style}
            >
              {transitionModal(
                (style, item) =>
                  item && (
                    <animated.div
                      className="relative text-gray-700 bg-white my-5 py-5 px-5
                  rounded-xl w-11/12 md:w-4/5 overflow-auto pretty-scroll"
                      onClick={e => e.stopPropagation()}
                      key={nanoid()}
                      style={{ ...style, maxHeight: '95%' }}
                    >
                      <button
                        className="absolute right-0 top-0 text-red-500 m-2
                     rounded-full focus:outline-none"
                        onClick={() => setActive(false)}
                      >
                        <svg
                          className="w-10 h-10"
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
                    </animated.div>
                  )
              )}
            </animated.div>
          )
      )}
    </>
  )
}
export { WideModalWrapper }
