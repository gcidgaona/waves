import React from 'react'
import mouseStr from './constants/mouseStr'

export const Mouse = () => {

  const {
    GO_DOWN,
  } =  mouseStr
  return (
    <div className="mb-4 flex flex-col items-center">
      <div className="mousey">
        <div className="scroller"></div>
      </div>
      <p className='font-medium dark:text-white'>{GO_DOWN}</p>
    </div>
  )
}
