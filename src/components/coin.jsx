import { useEffect, useState } from 'react'
import Axios from 'axios'
import Crypto from '../components/crypto'

const [listOfCoins, setListOfCoins] = useState([])
const [searchWord, setSearchWord] = useState('')

useEffect(() => {
  Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10').then(
    (response) => { 
      setListOfCoins(response.data.coins)
    },
  )
}, [])

const filteredCoins = listOfCoins.filter((coin) => {
  return coin.name.toLowerCase().includes(searchWord.toLowerCase())
})
function coin() {
  return (
    <div className="App">
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Bitcoin..."
          onChange={(event) => {
            setSearchWord(event.target.value)
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return (
            <Crypto
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          )
        })}
      </div>
    </div>
  )
}
export default coin
