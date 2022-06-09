import React, { useState } from 'react'

export default function Counter() {
    const [Counter, setCounter] = useState(0);

    const increase = () => {
      if (Counter < 10) {
        setCounter(count => count + 1);
      }
    }

    const decrease = () => {
        if (Counter > 0) {
          setCounter(count => count - 1);
        }
    }

    const reset = () => {
      setCounter(0);
    }

  return (
    <div>
        <p>React Counter</p>
        <span>{Counter}</span>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}
