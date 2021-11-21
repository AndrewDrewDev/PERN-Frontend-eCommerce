import { useLocation } from 'react-router-dom'
import { CategoryTypeEnum } from './types'

const useCategoryType = (): CategoryTypeEnum => {
  const location = useLocation()

  const splitLocation = location.pathname.split('/')

  if (splitLocation.includes('label')) return CategoryTypeEnum.LABEL
  if (splitLocation.includes('all')) return CategoryTypeEnum.ALL
  return CategoryTypeEnum.COMMON
}

export { useCategoryType }
