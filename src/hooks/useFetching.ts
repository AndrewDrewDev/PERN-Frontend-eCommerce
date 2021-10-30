import { useState } from 'react'
import { TResponseMessage } from '../types'

const useFetching = (callback: (...args: any) => Promise<any | void>) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetching: any = async (...args: any): Promise<any | void> => {
    try {
      setIsLoading(true)
      await callback(args)
    } catch (error: TResponseMessage | any) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}

export { useFetching }
