import React from 'react'
import { useNavigate } from 'react-router-dom'

function BitcoinItem({ image, name, id }) {
  const navigate = useNavigate()
  return (
    <div
      className="bitcoinItem"
      onClick={() => {
        navigate('/bitcoins/' + id)
      }}
    >
      <h2    style={{ fontWeight: 'normal' }} >{name}</h2>
    </div>
  )
}

export default BitcoinItem
