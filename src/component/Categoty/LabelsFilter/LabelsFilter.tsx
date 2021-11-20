import React from 'react'
import { HeaderFilter } from '../HeaderFilter/HeaderFilter'
import { categoryState } from '../../../store/CategoryState'
import { CheckboxFilter } from '../CheckboxFilter/CheckboxFilter'
import { updateFilterState } from '../../../utils/updateFilterState'
import { observer } from 'mobx-react-lite'

const LabelsFilter = observer(() => {
  const { labels } = categoryState.filters

  function onClickHandle(event: any) {
    const checkbox = event.target
    updateFilterState(checkbox, 'labels')
  }

  return (
    <article className="flex flex-col">
      <HeaderFilter name="Акции :: Новинки:" />
      {labels?.map((item, i) => (
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

export { LabelsFilter }
