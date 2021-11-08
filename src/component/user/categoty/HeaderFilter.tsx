import React, { FC } from 'react'

const HeaderFilter: FC<{ name: string }> = ({ name }) => {
  return (
    <header className="text-gray-700 font-medium text-lg">
      <h4 className="text-lg">{name}</h4>
    </header>
  )
}

export { HeaderFilter }
