import banner from '../assets/banner.png'
import image from '../assets/banner_image_crypto.png'
import './banner.scss'

function Banner() {
  return (
    <div className="banner__container-div">
      <p className="banner__container-title">
        Take your Coins to the next level{' '}
      </p>

      <img
        className="banner__container-image"
        src={image}
        width="120vx"
        height="100px"
      />
      <div className="banner__container-second-div">
        <div className="banner__container-second-title">
          We make digital currency effortless
        </div>
        <div className="banner__container-second-paragraph">
          Tap into the global digital currency form and select from a single
          account.
        </div>
      </div>

      <div className="banner__container-div-bullets">
        <div className="banner__container-div-bullet">
          <p className="banner__container-bullet-text-1">24/7 Monitoring</p>
          <p className="banner__container-bullet-text">
            {' '}
            "Guaranteeing daily API updates to ensure a seamless client
            experience around the clock."
          </p>
        </div>
        <div className="banner__container-div-bullet">
          <p className="banner__container-bullet-text-2">
            {' '}
            Cloud Based Plataform
          </p>
          <p className="banner__container-bullet-text">
         "Guaranteeing daily API updates to ensure a seamless client experience around the clock."
          </p>
        </div>
        <div className="banner__container-div-bullet">
          <p className="banner__container-bullet-text-3"> One account </p>
          <p className="banner__container-bullet-text">
            "Guaranteeing daily API updates to ensure a seamless client experience around the clock."
          </p>
        </div>
      </div>
  
    </div>
  )
}
export default Banner
