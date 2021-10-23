import { FC, FormEvent, ReactElement, useState } from 'react'
import { login, registration } from '../http/userApi'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../routes'
import { shopConfigStore } from '../store/ShopConfigStore'

const AuthPage: FC = (): ReactElement => {
  const location = useLocation()
  const history = useHistory()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isLogin = location.pathname === LOGIN_ROUTE

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()

      if (isLogin) {
        const data = await login(email, password)
        shopConfigStore.userAccount = {
          email: data.email,
          role: data.role,
        }
        history.push(MAIN_ROUTE)
      } else {
        const data = await registration(email, password)
        shopConfigStore.userAccount = {
          email: data.email,
          role: data.role,
        }
        history.push(MAIN_ROUTE)
      }
    } catch (e: any) {
      alert(e.response.data.message)
    }
  }

  return (
    <>
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6 text-blue-600">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-2">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h1 className="text-blue-500 text-xl font-bold">
                {isLogin ? 'Авторизация' : 'Регистрация'}
              </h1>
            </div>
            <hr className="my-2 border-b-1 border-blue-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={e => handleOnSubmit(e)}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blue-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="border-0 px-3 py-3 placeholder-blue-300 text-blue-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="">
                {isLogin ? (
                  <Link
                    to={REGISTRATION_ROUTE}
                    className="hover:underline text-xs font-bold"
                  >
                    Создать аккаунт?
                  </Link>
                ) : (
                  <Link
                    to={LOGIN_ROUTE}
                    className="hover:underline text-xs font-bold"
                  >
                    Есть аккаунт?
                  </Link>
                )}
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  {isLogin ? 'Войти' : 'Регистрация'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export { AuthPage }
