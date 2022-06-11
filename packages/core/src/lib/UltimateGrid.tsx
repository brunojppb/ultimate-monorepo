import React from 'react'

type UltimateGridProps = {
  children: React.ReactNode
}

export function UltimateGrid({ children }: UltimateGridProps) {
  return(
    <div style={{ backgroundColor: 'grid' }}>
      {children}
    </div>
  )
}