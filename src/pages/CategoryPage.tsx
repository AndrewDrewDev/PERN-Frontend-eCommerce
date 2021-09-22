import { useEffect, useState } from 'react'
import CategoryApi from '../http/CategoryApi'
import { useParams } from 'react-router-dom'
import { CategoryWrapper } from '../component/user/common/CategoryWrapper'
import { TCategoryProducts } from '../types'

const CategoryPage = () => {
  const { id }: { id: string } = useParams()

  const [name, setName] = useState()
  const [count, setCount] = useState()
  const [products, setProducts] = useState<
    TCategoryProducts[] | null | undefined
  >()

  useEffect(() => {
    CategoryApi.fetchProducts({
      name: 'Klassika-«Tupperware»',
      limit: 5,
      page: 1,
    }).then(data => setProducts(data))
  }, [])

  return (
    <>
      <div>{/*<CategoryWrapper name={} count={} products={products}/>*/}</div>
    </>
  )
}

export { CategoryPage }
