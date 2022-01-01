import { FC } from 'react'

const SomethingWhenWrong: FC<{ title?: string }> = ({ title }) => {
  return (
    <div className="my-5 text-center text-2xl">
      {title ? title : 'Что-то пошло не так!'}
    </div>
  )
}

export { SomethingWhenWrong }
