import Button from '../Buttons'
import { FC } from 'react'
import { categoryPageState } from '../../store/CategoryPageState'

const ProductsNotFound: FC<{ id: string }> = ({ id }) => {
  const updateFilterHandler = async () => {
    await categoryPageState.reloadFilter(id)
  }

  return (
    <div className="flex flex-col items-center w-full justify-center my-10 text-gray-700">
      <div className="text-4xl font-bold">
        Товар по указанным фильтрам не найден!
      </div>
      <div className="">
        <Button
          content="Сбросить фильтры"
          onClickHandler={() => updateFilterHandler()}
        />
      </div>
    </div>
  )
}
export { ProductsNotFound }
