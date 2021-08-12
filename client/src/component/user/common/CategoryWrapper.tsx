import { ReactElement } from 'react'
import { FC } from 'react'

type TCategoryWrapper = {
  name: string,
  count: number
  products: string[]
}

const CategoryWrapper: FC<TCategoryWrapper> = ({name, count, products}): ReactElement => {
  return (
    <>
      <div className="py-2">
        <a
          href="https://siteup.com.ua/demo/msk/tupperware/discount"
          className="hover:underline"
        >
          <h3 className="text-gray-700 text-2xl font-medium">{name}</h3>
        </a>
        <span className="mt-3 text-sm text-gray-600">{count} + Единиц товара</span>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {JSON.stringify(products)}

        </div>
      </div>
    </>
  )
}

export { CategoryWrapper }
