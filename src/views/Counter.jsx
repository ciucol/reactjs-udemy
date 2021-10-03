// Developed by @ciucol
// 01/10/2021
import React, { useState } from 'react'

const Counter = () => {
  const [number, setNumber] = useState(0)
  const handleAdd = () => {
    setNumber(number + 1)
  }
  const handleSub = () => {
    setNumber(number - 1)
  }
  return (
    <>
      <h3>Counter</h3>
      <button onClick={handleAdd}>+</button>
      <p>{number}</p>
      <button onClick={handleSub}>-</button>
    </>
  )
}
export default Counter
