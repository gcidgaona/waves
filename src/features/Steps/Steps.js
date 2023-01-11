import React from 'react'

export const Steps = () => {
  return (
    <div className='h-screen w-full bg-blue-400 flex justify-center items-center'>
      <div className='w-full h-72'>
        <div className='flex justify-center mb-8 text-3xl uppercase font-semibold'>
          <h1>Como funciona</h1>
        </div>
        <div className='w-2/5 mx-auto flex flex-col gap-4'>
          <div className='flex gap-2 items-center'>
            <div className="font-bold text-gray-700 rounded-full bg-green-300 p-2 flex items-center justify-center font-mono" style={{height: 40, width: 40, fontSize: 16}}>1</div>
            <div className='w-5/6 step-background'>
              <p>Contactate con nosotros!</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div className="font-bold text-gray-700 rounded-full bg-green-300 p-2 flex items-center justify-center font-mono" style={{height: 40, width: 40, fontSize: 16}}>1</div>
            <div className='w-5/6 step-background'>
              <p>Recibimos tu idea</p>
            </div>
          </div>
          <div className='flex gap-2 items-center'>
            <div className="font-bold text-gray-700 rounded-full bg-green-300 p-2 flex items-center justify-center font-mono" style={{height: 40, width: 40, fontSize: 16}}>1</div>
            <div className='w-5/6 step-background'>
              <p>Transformamos tu idea en realidad</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
