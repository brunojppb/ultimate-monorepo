import React from 'react'

type GridProps = {
  children: React.ReactNode
}

const gridStyle = {
  display: 'grid',
  gap: '8px',
  gridTemplateColumns: '1fr 1fr 1fr',
}

export function Grid({ children }: GridProps) {
  return(
    <div style={gridStyle}>
      {children}
    </div>
  )
}

type GridItemProps = {
  children: React.ReactNode
}

export function GridItem({children}: GridItemProps) {

  return (
    <div>
      {children}
    </div>
  )

}