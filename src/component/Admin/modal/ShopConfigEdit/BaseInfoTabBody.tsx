import { FC, FormEvent, useEffect, useState } from 'react'
import ShopApi from '../../../../http/ShopApi'
import { modalStateStore } from '../../../../store/ModalStateStore'
import { shopConfigStore } from '../../../../store/ShopConfigStore'
import { TShopConfig } from '../../../../types'
import { BaseInfoCustomCategory } from './BaseInfoCustomCategory/BaseInfoCustomCategory'
import { Input } from '../../form/Input'
import Button from '../../../Buttons/Buttons'

const BaseInfoTabBody: FC = () => {
  // Define base shop config field
  const [title, setTitle] = useState('')
  const [sub_title, setSub_title] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [pagination_number, setPagination_number] = useState('')
  const [currency, setCurrency] = useState('')

  const [copyright, setCopyright] = useState('')

  const [category_cloud_number, setCategory_cloud_number] = useState('')

  useEffect(() => {
    ShopApi.fetchConfig().then(data => {
      setTitle(data.title)
      setSub_title(data.sub_title)
      setAddress(data.address)
      setPhone(data.phone)
      setEmail(data.email)
      setPagination_number(data.pagination_number)
      setCurrency(data.currency)
      setCopyright(data.copyright)
      setCategory_cloud_number(data.category_cloud_number)
    })
  }, [])

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const updateConfigSubmitData: TShopConfig | any = {
      title,
      sub_title,
      address,
      phone,
      email,
      pagination_number,
      currency,
      copyright,
      category_cloud_number,
    }

    await ShopApi.updateConfig(updateConfigSubmitData).then(
      () => (modalStateStore.shopConfigEditModalState.isShowing = false)
    )

    await shopConfigStore.updateFetchData()
  }

  return (
    <>
      <h3 className="text-center text-3xl">
        <span className="font-bold">Управление магазином</span>
      </h3>
      <form
        onSubmit={e => handleOnSubmit(e)}
        className="relative flex flex-col justify-center items-center rounded-lg"
      >
        <Input
          name="Название магазина"
          value={title}
          setValue={setTitle}
          autoFocus={true}
        />
        <Input
          name="Манифест магазина"
          value={sub_title}
          setValue={setSub_title}
        />
        <Input name="Адрес магазина" value={address} setValue={setAddress} />
        <Input name="Телефон магазина" value={phone} setValue={setPhone} />
        <Input name="Email магазина" value={email} setValue={setEmail} />
        <Input
          name="Количество товара на странице категории"
          value={pagination_number}
          setValue={setPagination_number}
        />
        <Input name="Валюта" value={currency} setValue={setCurrency} />
        <Input
          name="Copyright | Авторские права"
          value={copyright}
          setValue={setCopyright}
        />
        <Input
          name="category_cloud_number"
          value={category_cloud_number}
          setValue={setCategory_cloud_number}
        />
        <div className="flex justify-center">
          <div className="grid w-full gap-6 grid-cols-1 lg:grid-cols-2">
            <BaseInfoCustomCategory categoryName="Акции" />
            <BaseInfoCustomCategory categoryName="Новинки" />
          </div>
        </div>
        <Button type="submit" content="Применить изменения" />
      </form>
    </>
  )
}

export { BaseInfoTabBody }
