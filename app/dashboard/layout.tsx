import React from 'react'
import DashBoardProvider from './provider'

function DashBoardLayout({children}: any) {
  return (
    <div>
        <DashBoardProvider>
          {children}
        </DashBoardProvider>
    </div>
  )
}

export default DashBoardLayout
