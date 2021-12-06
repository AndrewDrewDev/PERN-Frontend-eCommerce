import Button from '../../Buttons/Buttons'
import { FC } from 'react'
import { categoryState } from '../../../store/CategoryState'
import { CategoryTypeEnum } from '../../../hooks/useCategoryType/types'

interface ProductsNotFoundProps {
  categoryUrl: string
  categoryType: CategoryTypeEnum
}

const ProductsNotFound: FC<ProductsNotFoundProps> = ({
  categoryType,
  categoryUrl,
}) => {
  const updateFilterHandler = async () => {
    await categoryState.reloadFilter(categoryType, categoryUrl)
  }

  return (
    <div className="flex flex-col items-center w-full justify-center my-10 text-gray-700">
      <div className="text-4xl font-bold">
        Товар по указанным фильтрам не найден!
      </div>
      <div>
        <Button
          content="Сбросить фильтры"
          onClickHandler={() => updateFilterHandler()}
        />
      </div>
    </div>
  )
}
export { ProductsNotFound }
