import React from 'react'
import { useParams } from 'react-router-dom'
import { ListofCoins } from '../helpers/ListofCoins'


function CoinsDisplay() {
  const { id } = useParams()
  const crypto = ListofCoins[id]
  return (
    <div className="project">
      <h1> {crypto.name}</h1>
      <img src={crypto.image} width="10px" height="10px;" />
      <p> Description: </p> {crypto.description}
    </div>
  )
}
export default CoinsDisplay
