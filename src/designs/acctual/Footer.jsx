import { Link } from 'react-router-dom'
import intelinxLogoDark from '../../../assets/intelinx-logo-dark.png'
import intelinxLogoLight from '../../../assets/intelinx-logo-light.png'

export default function Footer({ homePath = '/acctual' }) {
  return (
    <footer className="wts-footer">
      <div className="wts-footer-inner">
        <div className="wts-footer-brand">
          <a href="#" className="wts-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src={intelinxLogoDark} alt="Intelinx" className="kn-logo-img kn-logo-img--for-dark" />
            <img src={intelinxLogoLight} alt="Intelinx" className="kn-logo-img kn-logo-img--for-light" />
          </a>
          <p className="wts-footer-desc">
            AI Research and Growth Infrastructure for B2B.
          </p>
          <p className="wts-footer-copy">&copy; {new Date().getFullYear()} Intelinx</p>
        </div>
        <div className="wts-footer-col">
          <h4>Company</h4>
          <Link to={homePath}>Infrastructure</Link>
          <Link to={homePath}>Results</Link>
          <Link to={`${homePath}#use-cases`}>Use Cases</Link>
          <Link to={homePath}>About</Link>
        </div>
        <div className="wts-footer-col">
          <h4>Connect</h4>
          <a href="#">Contact</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
