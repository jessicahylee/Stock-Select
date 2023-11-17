import React from 'react'
import { ListofCoins } from '../helpers/ListofCoins'
import BitcoinItem from '../components/BitcoinItem';
import './coin.scss'

function coins() {
  return (
    <div className="bitcoin__cointainer">
      <h1> Coins List</h1>
      <div>
        {ListofCoins.map((bitcoin, idx) => {
          return (
            <BitcoinItem id={idx} name={bitcoin.name} image={bitcoin.image} />
          )
        })}
      </div>
    </div>
  )
}

export default coins
