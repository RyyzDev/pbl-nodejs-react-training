import 'bootstrap/dist/css/bootstrap.min.css'
import LogoResto from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-dark-subtle">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={LogoResto} width={70} height={70} alt="Logo Restoran" />
            <strong className="navbar-text text-decoration-underline">Restoran Kitchen</strong>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ps-4" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item m-3">
              <Link className="nav-link" to='/'  aria-current="page"><b>Beranda</b></Link>
            </li>
            <li className="nav-item m-3">
              <Link to='/menu' className="nav-link"><b>Menu</b></Link>
            </li>
            <li className="nav-item m-3">
              <Link to='/contact' className="nav-link"><b>Kontak</b></Link>
            </li>
            <li className="nav-item m-3">
              <Link to='/employee' className="nav-link"><b>Karyawan</b></Link>
            </li>



            {/* <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav> 
  </>
  )
}



