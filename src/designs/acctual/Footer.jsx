import { Link } from 'react-router-dom'
import wantssLogo from '../../../assets/WANTTS logo.png'

export default function Footer({ homePath = '/acctual' }) {
  return (
    <footer className="wts-footer">
      <div className="wts-footer-inner">
        <div className="wts-footer-brand">
          <Link to={homePath} className="wts-logo">
            <img src={wantssLogo} alt="WANTSS" className="kn-logo-img" />
          </Link>
          <p className="wts-footer-desc">
            AI Research and Growth Infrastructure for B2B.
          </p>
          <p className="wts-footer-copy">&copy; {new Date().getFullYear()} WANTSS</p>
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
