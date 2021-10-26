import { useState, DragEvent, Dispatch, SetStateAction } from 'react'
import { reorderArrayByIndex } from '../utils/reorderArrayByIndex'

type TData = any[] | null
type TUseDragDropReturn = [
  TData,
  Dispatch<SetStateAction<TData>>,
  (e: DragEvent<HTMLDivElement>, index: number) => void,
  (e: DragEvent<HTMLDivElement>, index: number) => void,
  (e: DragEvent<HTMLDivElement>, index: number) => void
]
const useDragDrop = (
  sourceArray: TData,
  callback?: (updatedData: any[]) => any
): TUseDragDropReturn => {
  const [data, setData] = useState<TData>(sourceArray)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const dragStartHandler = (e: DragEvent<HTMLDivElement>, index: number) => {
    setCurrentIndex(index)
  }

  const dragOverHandler = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
  }

  const dragDropHandler = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()

    if (currentIndex !== index && data) {
      const updatedData = reorderArrayByIndex(data, currentIndex, index)
      setData(updatedData)
      if (callback) callback(updatedData)
    }
  }

  return [data, setData, dragStartHandler, dragOverHandler, dragDropHandler]
}

export { useDragDrop }
