import React from 'react'
import { HeaderFilter } from './HeaderFilter'
import { categoryPageState } from '../../../store/CategoryPageState'
import { CheckboxFilter } from './CheckboxFilter'
import { updateFilterState } from './utils/updateFilterState'
import { observer } from 'mobx-react-lite'

const LabelsFilter = observer(() => {
  const { labels } = categoryPageState.filters

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
