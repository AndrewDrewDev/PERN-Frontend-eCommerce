import React, { FC } from 'react'
import { useTransition, animated } from 'react-spring'
import { UseTransitionProps } from '@react-spring/core/dist/declarations/src/types/transition'
import { nanoid } from 'nanoid'

interface ITransitionWrapperProps {
  state: boolean
  props: UseTransitionProps
}

const TransitionWrapper: FC<ITransitionWrapperProps> = ({
  state,
  props,
  children,
}) => {
  const transition = useTransition(state, props)
  return (
    <>
      {transition((style, item) => (
        <>
          {item && (
            <animated.div key={nanoid()} style={style}>
              {children}
            </animated.div>
          )}
        </>
      ))}
    </>
  )
}

export { TransitionWrapper }
