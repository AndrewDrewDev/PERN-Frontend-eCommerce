import { ReactElement, useEffect, useState } from 'react'
import { FC } from 'react'
import { useParams } from 'react-router-dom'
import ContentLoadingSpinner from '../component/Loaders/ContentLoadingSpinner/ContentLoadingSpinner'
import { InfoContent } from '../component/Info/Info'
import { TInfoPagesData } from '../types'
import infoApi from '../http/infoApi'
import { PageNotFound } from './PageNotFound'

const InfoPage: FC = (): ReactElement => {
  const { id }: { id: string } = useParams()
  const [data, setData] = useState<TInfoPagesData | null | undefined>()

  useEffect(() => {
    infoApi.fetchInfoPagesData(id).then(data => setData(data))
  }, [id])

  if (data === undefined) return <ContentLoadingSpinner />
  if (data === null) return <PageNotFound title={'Страница не найдена'} />

  return (
    <>
      <InfoContent title={data.name} content={data.content} img={data.img} />
    </>
  )
}

export { InfoPage }
