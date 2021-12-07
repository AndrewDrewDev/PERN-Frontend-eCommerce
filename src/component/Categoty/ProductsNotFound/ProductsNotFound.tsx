import Button from '../../Buttons/Buttons'
import { FC } from 'react'
import { categoryState } from '../../../store/CategoryState'
import { observer } from 'mobx-react-lite'

const ProductsNotFound: FC = observer(() => {
  const resetFilterHandler = async () => {
    await categoryState.resetFilters()
  }

  return (
    <div className="flex flex-col items-center w-full justify-center my-10 text-gray-700">
      <div className="text-4xl font-bold">
        Товар по указанным фильтрам не найден!
      </div>
      <div>
        <Button
          content="Сбросить фильтры"
          onClickHandler={() => resetFilterHandler()}
        />
      </div>
    </div>
  )
})
export { ProductsNotFound }
