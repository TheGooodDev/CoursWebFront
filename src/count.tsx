import { useEffect, useMemo, useState } from 'react'

interface ParentCount{
    countParent: number
}

export default function Count({countParent}: ParentCount) {
    const [count, setCount] = useState(0);
    const totalCount = useMemo(
        () => count+countParent,
        [count, countParent]
      );

    return (
        
    <button onClick={() => setCount(count + 1)}>
        count is {totalCount}
    </button>
    )
  }