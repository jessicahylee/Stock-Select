import banner from '../assets/banner.png'

function Banner() {
  return (
    <div className="banner__container-div">
      <img
        classname="banner__container-image"
        width="500vx"
        height="350px"
        src={banner}
      />
    </div>
  )
}
export default Banner
