import React from 'react'

type UltimateBoxProps = {
  children: React.ReactNode
}

const style = {
  width: '100%',
  backgroundColor: '#1e293b',
  padding: '8px',
}

export function Box({ children }: UltimateBoxProps) {
  return(
    <div style={style}>
      {children}
    </div>
  )
}