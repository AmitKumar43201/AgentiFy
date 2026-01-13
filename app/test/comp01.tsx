import React from 'react'

function Comp01({children}: any) {
  return (
    <div className='bg-red-200'>
      <div>hello this is comp 01</div>
      {children}
    </div>
  )
}

export default Comp01
