import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './form.scss'
import axios from 'axios'

function Form() {
  const [selectedOption, setSelectedOption] = useState('option1')
  const [option, setOption] = useState('option1')
  const [option1, setOption1] = useState('option1')
  const [option2, setOption2] = useState('option1')

  const Navigate = useNavigate()

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const Option = (event) => {
    setOption(event.target.value)
  }
  const Option1 = (event) => {
    setOption1(event.target.value)
  }
  const Option2 = (event) => {
    setOption2(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Selected Sector:', selectedOption)
    console.log('Selected Region:', option)
    console.log('Selected Market CAP:', option1)
    console.log('Selected Dividend Pay:', option2)

    Navigate('/Coins')
  }
  return (
    <div className="form__container-div">
      <h3 className="form__container-header"> Buy a Crypto today </h3>
      <form onSubmit={handleSubmit}>
        <div className="form__container-sector">
          <label className="form__container-sector-label">
            <div className="form__container-div-paragraph">
              <p className="form__container-paragraph-sector">
                Select a Sector:
              </p>
            </div>
            <select
              className="select_sector"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="option1">Technology</option>
              <option value="option2">Finance</option>
            </select>
          </label>
        </div>
        <div className="form__container-region">
          <label className="form__container-region-label">
            <div className="form__container-div-paragraph-region">
              <p className="form__container-paragraph-region">
                Select a Region:
              </p>
            </div>
            <select className="select_region" value={option} onChange={Option}>
              <option value="option1">Canada</option>
              <option value="option2">USA</option>
            </select>
          </label>
        </div>
        <div className="form__container-market">
          <label className="form__container-market-label">
            <div className="form__container-div-paragraph-market">
              <p className="form__container-paragraph-market">
                Select a Market CAP:
              </p>
            </div>
            <select
              className="select_market"
              value={option1}
              onChange={Option1}
            >
              <option value="option1">Less than 1B</option>
              <option value="option2">Less than 100B </option>
              <option value="option3">More than 500B</option>
            </select>
          </label>
        </div>
        <div className="form__container-divident">
          <label className="form__container-divident-label">
            <div className="form__container-div-paragraph-divident">
              <p className="form__container-paragraph-divident">
                Divident Pay:
              </p>
            </div>
            <select
              className="select_divident"
              value={option2}
              onChange={Option2}
            >
              <option value="option1">Yes</option>
              <option value="option2">No </option>
              <option value="option3">N/A</option>
            </select>
          </label>
        </div>
        <div className="form__container-div-button">
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
    </div>
  )
}
export default Form
