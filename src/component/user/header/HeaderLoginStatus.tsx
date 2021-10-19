import { FC, ReactElement } from 'react'
import { TUserAccountData } from '../../../types'
import { shopConfigStore } from '../../../store/ShopConfigStore'

const HeaderLoginStatus: FC<TUserAccountData> = ({
  email,
  role,
}): ReactElement => {
  return (
    <>
      {shopConfigStore.userAccount ? (
        <div className=" py-1 flex justify-center items-center bg-blue-600 text-white text-center">
          <div className="">
            <span className="font-bold">email: </span>
            {email}
          </div>
          <div className="mx-5">
            <span className="font-bold">role: </span>
            {role}
          </div>
          {role === 'ADMIN' ? (
            <div className="bg-red-500 rounded-lg px-2 uppercase">
              вы администратор!
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  )
}

export { HeaderLoginStatus }
