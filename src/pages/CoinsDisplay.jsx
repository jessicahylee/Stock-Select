import React from 'react'
import { useParams } from 'react-router-dom'
import { ListofCoins } from '../helpers/ListofCoins'
import './coinsdisplay.scss'

function CoinsDisplay() {
  const { id } = useParams()
  const crypto = ListofCoins[id]
  return (
    <div className="project_coin">
      <h2 className="project_coin-title"> {crypto.name}</h2>
      <img src={crypto.image} width="120px" height="100px;" />
      <h3>{crypto.price}</h3>
      <p>{crypto.description} </p>
    </div>
  )
}
export default CoinsDisplay

// Here is where you can find the description of the coins