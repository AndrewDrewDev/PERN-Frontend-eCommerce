import React, { FC, ReactElement } from 'react'

const ProgressBar: FC<{ step: 1 | 2 | 3 }> = ({ step }): ReactElement => {
  return (
    <>
      {step === 1 ? (
        <div className="overflow-auto w-full py-2">
          <div className="flex">
            <div className="w-1/3">
              <div className="relative mb-2">
                <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-white w-full">
                    <svg
                      className="w-6 h-6 w-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-700 text-center md:text-base">
                Ваша Корзина
              </div>
            </div>
            <div className="w-1/3">
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  style={{
                    width: 'calc(100% - 2.5rem - 1rem)',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                  }}
                >
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div
                      className="w-0 bg-gray-200 py-1 rounded"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-gray-600 w-full">
                    <svg
                      className="w-6 h-6 w-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-700 text-center md:text-base">
                Оформление заказа
              </div>
            </div>
            <div className="w-1/3">
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  style={{
                    width: 'calc(100% - 2.5rem - 1rem)',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                  }}
                >
                  <div
                    className="w-0 bg-gray-200 py-1 rounded"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-gray-600 w-full">
                    <svg
                      className="w-6 h-6 w-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-700 text-center md:text-base">
                Оплата
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {step === 2 ? (
        <div className="overflow-auto">
          <div className="w-full py-2">
            <div className="flex">
              <div className="w-1/3">
                <div className="relative mb-2">
                  <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
                    <span className="text-center text-white w-full">
                      <svg
                        className="w-6 h-6 w-full"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-700 text-center md:text-base">
                  Ваша Корзина
                </div>
              </div>
              <div className="w-1/3">
                <div className="relative mb-2">
                  <div
                    className="absolute flex align-center items-center align-middle content-center"
                    style={{
                      width: 'calc(100% - 2.5rem - 1rem)',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                    }}
                  >
                    <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                      <div
                        className="w-0 bg-blue-300 py-1 rounded"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>
                  <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
                    <span className="text-center text-gray-600 w-full">
                      <svg
                        className="w-6 h-6 w-full text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-700 text-center md:text-base">
                  Оформление заказа
                </div>
              </div>
              <div className="w-1/3">
                <div className="relative mb-2">
                  <div
                    className="absolute flex align-center items-center align-middle content-center"
                    style={{
                      width: 'calc(100% - 2.5rem - 1rem)',
                      top: '50%',
                      transform: 'translate(-50%,-50%)',
                    }}
                  >
                    <div
                      className="w-0 bg-gray-200 py-1 rounded"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                    <span className="text-center text-gray-600 w-full">
                      <svg
                        className="w-6 h-6 w-full"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-700 text-center md:text-base">
                  Оплата
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {step === 3 ? (
        <div className="w-full py-2">
          <div className="flex">
            <div className="w-1/3">
              <div className="relative mb-2">
                <span>
                  <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
                    <span className="text-center text-white w-full">
                      <svg
                        className="w-6 h-6 w-full"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </span>
                  </div>
                </span>
              </div>
              <span>
                <div className="text-xs text-gray-700 text-center md:text-base hover:underline">
                  Корзина
                </div>
              </span>
            </div>
            <div className="w-1/3">
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  style={{
                    width: 'calc(100% - 2.5rem - 1rem)',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                  }}
                >
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div
                      className="w-0 bg-blue-300 py-1 rounded"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                <span>
                  <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
                    <span className="text-center text-white w-full">
                      <svg
                        className="w-6 h-6 w-full"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>
                  </div>
                </span>
              </div>
              <span>
                <div className="text-xs text-gray-700 text-center md:text-base hover:underline">
                  Оформление заказа
                </div>
              </span>
            </div>
            <div className="w-1/3">
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  style={{
                    width: 'calc(100% - 2.5rem - 1rem)',
                    top: '50%',
                    transform: 'translate(-50%,-50%)',
                  }}
                >
                  <div
                    className="w-0 bg-blue-300 py-1 rounded"
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
                  <span className="text-center text-white w-full">
                    <svg
                      className="w-6 h-6 w-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="text-xs text-gray-700 text-center md:text-base">
                Оплата
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export { ProgressBar }
