import banner from '../assets/banner.png'
import image from '../assets/Banner_picture.png'
import './banner.scss'

function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__container-div">
        <h3> hahaha </h3>
        <img
          className="banner__container-banner"
          src={image}
          width="100vx"
          height="150px"
        />
      </div>
    </div>
  )
}
export default Banner
