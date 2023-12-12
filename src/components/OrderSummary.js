import React from 'react'
import { useNavigate } from 'react-router-dom'


const OrderSummary = () => {
    const navigate= useNavigate()

  return (
    <div>
      <h2> Order  Summary</h2>
      <button onClick={()=>navigate(-1)} >Back</button>

    </div>
  )
}

export default OrderSummary
