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
    'fixed z-50 flex justify-center items-center top-0 left-0 bg-black bg-opacity-50 '

  if (scale === 'block') {
    style += 'h-full w-full'
  } else {
    style += 'h-screen w-screen'
  }
  return (
    <>
      <div className={style} onClick={e => setActive(false)}>
        <div
          className="p-5 bg-white rounded-lg"
          style={{
            maxHeight: '95%',
          }}
          onClick={e => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  )
}
export { FlexModalWrapper }
