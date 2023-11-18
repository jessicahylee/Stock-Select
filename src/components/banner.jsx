import banner from '../assets/banner.png'
import image from '../assets/banner_image_crypto.png'
import './banner.scss'

function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__container-div">
        <h3 className="banner__container-title">
          {' '}
          LEARN CORRECT WITH CRYPTO SELECT!{' '}
        </h3>

        <img
          className="banner__container-banner"
          src={image}
          width="130vx"
          height="150px"
        />
      </div>
    </div>
  )
}
export default Banner
