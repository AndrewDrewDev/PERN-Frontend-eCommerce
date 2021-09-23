import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom'

type TLinkToCategory = {
  url: string
  name: string
  count: string
}

const LinkToCategory: FC<TLinkToCategory> = ({
  url,
  name,
  count,
  children,
}): ReactElement => {
  return (
    <>
      <Link to={`/category/${url}?name=${name}&count=${count}`}>
        {children}
      </Link>
    </>
  )
}

export default LinkToCategory
