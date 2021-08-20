import { ReactElement } from 'react'
import { FC } from 'react'
import goose from './img/CatchGooseBitch.jpeg'

const PageNotFound: FC = (): ReactElement => {
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <img src={goose} alt="Лови гуся сука!" />
      </div>
      <h1 className="text-center text-4xl my-2">
        Ошибка <span className="text-red-500">404</span>
      </h1>
    </div>
  )
}

export { PageNotFound }
