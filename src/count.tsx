import { useState } from 'react'
import ShowCount from './showCount';

export default function Count() {
    const [count, setCount] = useState(0);

    return (
    <button onClick={() => setCount(count + 1)}>
      </button>
    )
  }