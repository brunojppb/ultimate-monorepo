import React from 'react';

type TitleProps = {
    children: React.ReactNode
}

const style = {
    fontSize: '50px',
    color: 'white',
}

export function Title({children}: TitleProps) {
    return(
        <h1 style={style}>{children}</h1>
    )
}