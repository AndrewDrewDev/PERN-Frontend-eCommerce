import React from 'react'

const AddProductImgButton = () => {
  return (
    <>
      <button className="flex items-center justify-center h-32 w-28 border-2 border-gray-600 rounded-xl border-dashed">
        <div className="text-gray-600 border-blue-600 bg-gray-400 rounded-full">
          <svg
            className="w-20 h-20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </button>
    </>
  )
}

export { AddProductImgButton }
