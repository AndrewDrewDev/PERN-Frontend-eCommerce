import { config, useTransition, animated } from 'react-spring'
import { Dispatch, FC, SetStateAction } from 'react'

interface RightModalProps {
  title: string
  show: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const RightSideBarModal: FC<RightModalProps> = ({
  title,
  show,
  setShow,
  children,
}) => {
  const modalTransition = useTransition(show, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -100, opacity: 0 },
    config: config.gentle,
  })

  const bgTransition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <>
      {bgTransition(
        (style, item) =>
          item && (
            <animated.div
              className="fixed inset-0 bg-black bg-opacity-75 z-50"
              style={style}
            >
              {modalTransition(
                (style, item) =>
                  item && (
                    <animated.div
                      className="insert-0 max-w-xs w-full h-screen px-6 py-4
                      overflow-y-auto pretty-scroll bg-white border-l-2
                      border-gray-300"
                      style={style}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-medium text-gray-700">
                          {title}
                        </h3>
                        <button
                          className="border-2 duration-500 border-white
                          focus:outline-none hover:border-red-500 p-1
                          hover:text-white hover:bg-red-400
                          rounded-full text-gray-600 focus:outline-none"
                          onClick={() => setShow(false)}
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <hr className="my-3" />
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

export { RightSideBarModal }
