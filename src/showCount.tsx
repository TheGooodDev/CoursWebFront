import { Component, PropsWithChildren, useState } from 'react';
import Count from './count';

interface ShowCountProps extends PropsWithChildren {
    counter: number
}

export default function ShowCount(props: ShowCountProps) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Exo 3</h1>
            <div>
                <Count countParent={count}/>
                <Count countParent={count}/>
            </div>
            <button onClick={() => setCount(count + 1)}>
                add to all
            </button>
        </div>
    )
  }