import React from 'react'

type UltimateButtonProps = {
  children: React.ReactNode
}

export function UltimateBox({ children }: UltimateButtonProps) {
  return(
    <div style={{ backgroundColor: 'olive' }}>
      {children}
    </div>
  )
}