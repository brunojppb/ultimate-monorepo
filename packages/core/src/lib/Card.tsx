import React from 'react'

type CardProps = {
    children: React.ReactNode,
}

const style = {
    padding: '24px',
    backgroundColor: '#334155',
    color: '#fafafa',
    borderRadius: '8px',
}

export function Card({children}: CardProps) {
    return (
        <div style={style}>
            {children}
        </div>
    )
}