import './footer.scss'
import facebook from '../assets/facebook.jpeg'
import instagram from '../assets/instagram.webp'
import youtube from '../assets/youtube.png'
function Footer() {
  return (
    <div className="container__div">
      <div className="container__div-container">
        <div className="container__div-icon1">
          <img
            classname="header__container-image"
            width="38px"
            src={facebook}
          />
        </div>
        <div className="container__div-icon2">
          <img
            classname="header__container-instagram"
            width="48px"
            src={instagram}
          />
        </div>
        <div className="container__div-icon3">
          <img classname="header__container-image" width="35px" src={youtube} />
        </div>
      </div>
      <div className="container__div-container2">
        <div className="container__div-containerInfo">Info</div>
        <div className="container__div-containerSupport">Support</div>
        <div className="container__div-containerMarketing">Marketing</div>
      </div>
    </div>
  )
}
export default Footer
