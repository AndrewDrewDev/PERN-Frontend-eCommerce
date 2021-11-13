import { FC } from 'react'

const AppLoadingSpinner: FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-gray-900" />
    </div>
  )
}

export { AppLoadingSpinner }
