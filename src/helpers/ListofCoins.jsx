import Ethereum from '../assets/ethereum-symbol.png'
import Bitcoin from '../assets/bitcoin_symbol.jpeg'
import Dogecoin from '../assets/dogecoin_symbol.jpeg'
import Litecoin from '../assets/litecoin_symbol.webp'
import Ripple from '../assets/ripple_symbol.jpeg'

export const ListofCoins = [
  {
    name: 'Ethereum',
    price: '$2,667.31',
    image: Ethereum,
    description:
      'Ethereum is a decentralized blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. Among cryptocurrencies, ether is second only to bitcoin in market capitalization. It is open-source software. Ethereum was conceived in 2013 by programmer Vitali',
  },
  {
    name: 'Bitcoin',
    price: '$50,004.43',
    image: Bitcoin,
    description:
      'Bitcoin is a decentralized digital currency created by an unknown person or group of people under the name Satoshi Nakamoto and released as open-source software in 2009. It does not rely on a central server to process transactions or store funds. There are a maximum of 2,099,999,997,690,000 bitcoin elements (called satoshis, the unit has been named in collective homage to the original creator), which are currently most commonly measured in units of 100,000,000 known as BTC. There will only ever be 21 million bitcoin (BTC) to ever be created.',
  },
  {
    name: 'Dogecoin',
    price: '$0.11',
    image: Dogecoin,
    description:
      'Dogecoin.com promotes the currency as the "fun and friendly Internet currency", referencing its origins as a "joke".[9] Software engineers Billy Markus and Jackson Palmer launched the satirical cryptocurrency as a way to make fun of Bitcoin and the many other cryptocurrencies boasting grand plans to take over the world',
  },
  {
    name: 'Litecoin',
    price: '$95.45',
    image: Litecoin,
    description: 'Litecoin is a decentralized peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Inspired by Bitcoin, Litecoin was among the earliest altcoins, starting in October 2011.In technical details, the Litecoin main chain shares a slightly modified Bitcoin codebase. The practical effects of those codebase differences are lower transaction fees,[5] faster transaction confirmations,[4 historically been referred to as the "silver to Bitcolock"'
  },
  {
    name: 'Ripple',
    price: '$0.84',
    image: Ripple,
    description: 'In December 2020, Ripple Labs and two of its executives were sued by the  (SEC) for selling XRP tokens, which the SEC classified as unregistered securities. In July 2023, the court ruled that XRP, as a digital token, is not in and of itself a contract, transaction, or scheme that embodies the Howey requirements of an investment contract.',
  },
]
