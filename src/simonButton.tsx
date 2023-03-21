import { useEffect, useState } from 'react';




interface SimonButtonProps {
    color: string,
    currentColor: string,
    turn: boolean,
    active: boolean,
    index: number,
    onClick: Function
}

export default function SimonButton(props: SimonButtonProps) {
    const { color, currentColor, turn, active, index, onClick  } = props

    return (
        <button className={(active?"active":"") + " " + color} onClick={() => onClick(color)}>

        </button>
    )
}

