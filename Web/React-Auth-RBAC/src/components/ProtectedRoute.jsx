import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    // Not logged in, can show a message or redirect.
    // For this mock, let's just show an access denied message if they try to access protected content without logging in.
    return (
      <div className="container mt-5">
        <div className="alert alert-warning text-center">
          Silahkan pilih akun mock (Login) di Navbar terlebih dahulu.
        </div>
      </div>
    );
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Role not authorized
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          Akses Ditolak! Akun dengan role "{user.role}" tidak memiliki izin untuk halaman ini.
        </div>
      </div>
    );
  }

  return children;
};
