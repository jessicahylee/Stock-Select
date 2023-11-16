// Form.js
import React, { useState } from 'react';
import './form.scss';
import Coin from '../components/coin'
import axios from 'axios';

function Form() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [option, setOption] = useState('option1');
  const [option1, setOption1] = useState('option1');
  const [option2, setOption2] = useState('option1');
  const [searchWord, setSearchWord] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const Option = (event) => {
    setOption(event.target.value);
  };

  const Option1 = (event) => {
    setOption1(event.target.value);
  };

  const Option2 = (event) => {
    setOption2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make API call using the selected options
      const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10');
      setSearchWord(''); // Reset the searchWord
    } catch (error) {
      console.error('Error fetching coins:', error);
    }

    // Log the selected options
    console.log('Selected Sector:', selectedOption);
    console.log('Selected Region:', option);
    console.log('Selected Market CAP:', option1);
    console.log('Selected Dividend Pay:', option2);
  };

  return (
    <div className="form__container-div">
      <h3 className="form__container-header"> Start Investing Today </h3>
      <form onSubmit={handleSubmit}>
        {/* ... (rest of your form code) */}
        <div className="form__container-div-button">
          {/* ... (rest of your form code) */}
          <div className="form__container-div-btn">
            <button className="form__button-submit" type="submit">
              Submit
            </button>
          </div>
          <div className="form__container-div-btns">
            <button className="form__button-cancel" type="button">
              Cancel
            </button>
          </div>
        </div>
      </form>

      {/* Render the Coin component and pass searchWord as a prop */}
      <Coin searchWord={searchWord} />
    </div>
  );
}

export default Form;






// import { useEffect, useState } from 'react'
// import Axios from 'axios'
// import Crypto from '../components/crypto'

// const [listOfCoins, setListOfCoins] = useState([])
// const [searchWord, setSearchWord] = useState('')

// useEffect(() => {
//   Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10').then(
//     (response) => { 
//       setListOfCoins(response.data.coins)
//     },
//   )
// }, [])

// const filteredCoins = listOfCoins.filter((coin) => {
//   return coin.name.toLowerCase().includes(searchWord.toLowerCase())
// })
// function coin() {
//   return (
//     <div className="App">
//       <div className="cryptoHeader">
//         <input
//           type="text"
//           placeholder="Bitcoin..."
//           onChange={(event) => {
//             setSearchWord(event.target.value)
//           }}
//         />
//       </div>
//       <div className="cryptoDisplay">
//         {filteredCoins.map((coin) => {
//           return (
//             <Crypto
//               name={coin.name}
//               icon={coin.icon}
//               price={coin.price}
//               symbol={coin.symbol}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }
// export default coin
