import React from 'react'
import { useParams } from 'react-router-dom'
import { ListofCoins } from '../helpers/ListofCoins'
import './coinsdisplay.scss'

function CoinsDisplay() {
  const { id } = useParams()
  const crypto = ListofCoins[id]
  return (
    
    <div className="project_coin">
    <div className="project_coin-first-div">
      <h2 className="project_coin-name"> {crypto.name}</h2>
      {/* <img  src={crypto.image} width="120px" height="100px;" /> */}
      </div>
      <div className="project_coin-div">
      <p className="project_coin-price"> Price: {crypto.price}</p>
      <p className="project_coin-description" > Description: {crypto.description} </p>
      </div>
      </div>

  )
}

export default CoinsDisplay

// Here is where you can find the description of the coins
