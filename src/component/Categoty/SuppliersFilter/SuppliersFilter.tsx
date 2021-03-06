import React from 'react'
import { categoryState } from '../../../store/CategoryState'
import { HeaderFilter } from '../HeaderFilter'
import { CheckboxFilter } from '../CheckboxFilter'
import { updateFilterState } from '../../../utils/updateFilterState'
import { observer } from 'mobx-react-lite'

const SuppliersFilter = observer(() => {
  const { suppliers } = categoryState.filters

  function onClickHandle(event: any) {
    const checkbox = event.target
    updateFilterState(checkbox, 'suppliers')
  }

  return (
    <article className="flex flex-col">
      <HeaderFilter name="Поставщики:" />
      {suppliers?.map((item, i) => (
        <CheckboxFilter
          onClickHandler={event => onClickHandle(event)}
          key={item.name + i}
          name={item.name}
          id={item.id}
          checked={item.selected}
        />
      ))}
    </article>
  )
})
export {SuppliersFilter}
