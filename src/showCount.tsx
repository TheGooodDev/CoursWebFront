import { Component, PropsWithChildren } from 'react';

interface ShowCountProps extends PropsWithChildren {
    counter: number
}

export default function ShowCount({counter}: ShowCountProps) {
    return (
        <div>
            count is {counter}
        </div>
    )
  }