import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar () {
  const { user, login, logout } = useAuth();

  const handleMockLogin = (e) => {
    const value = e.target.value;
    if (!value) {
      logout();
    } else {
      const [username, role] = value.split(':');
      login({ username, role });
    }
  };

  return (
  <>
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} width={70} height={70} alt="Logo Restoran" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ps-4" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item m-3">
              <Link to='/' className="nav-link"><b>Film</b></Link>
            </li>
            {user && user.role === 'admin' && (
              <li className="nav-item m-3">
                <Link to='/categories' className="nav-link"><b>Kategori</b></Link>
              </li>
            )}
          </ul>
          <div className="d-flex">
             <select 
                className="form-select" 
                onChange={handleMockLogin} 
                value={user ? `${user.username}:${user.role}` : ''}
             >
                <option value="">-- Pilih Akun Mock --</option>
                <option value="admin_user:admin">Admin (admin_user)</option>
                <option value="regular_user:user">User (regular_user)</option>
             </select>
          </div>
        </div>
      </div>
    </nav> 
  </>
  )
}



