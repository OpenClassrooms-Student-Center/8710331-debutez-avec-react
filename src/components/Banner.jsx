import '../styles/Banner.css'
import logo from '../assets/logo.png'

const Banner = () => {
  const title = 'La maison jungle'
  return (
      <div className="banner">
        <img
            src={logo}
            alt="Logo La maison jungle"
            className="banner-logo"
        />
        <h1 className="banner-title">{title}</h1>
      </div>
  )
}

export default Banner
