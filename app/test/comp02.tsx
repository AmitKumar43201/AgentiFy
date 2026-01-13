import React from 'react'
import Comp01 from './comp01'

function Comp02(props: any) {
  return (
    <Comp01>
      <div className='bg-green-600'>
        <div>I am comp02, child of Comp01</div>
        <div>I am sibling of Comp02</div>
      </div>
    </Comp01>
  )
}

export default Comp02
