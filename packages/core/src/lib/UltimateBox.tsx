import React from 'react'

type UltimateBoxProps = {
  children: React.ReactNode
}

export function UltimateBox({ children }: UltimateBoxProps) {
  return(
    <div style={{ backgroundColor: 'olive' }}>
      {children}
    </div>
  )
}