import { FC } from 'react'

type TSomethingWhenWrong = { title?: string }
const SomethingWhenWrong: FC<TSomethingWhenWrong> = ({ title }) => {
  return (
    <div className="my-5 text-center text-2xl">
      {title ? title : 'Что-то пошло не так!'}
    </div>
  )
}

export { SomethingWhenWrong }
