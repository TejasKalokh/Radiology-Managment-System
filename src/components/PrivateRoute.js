import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signIn" />;
  }

  // If no specific role is required, allow access
  if (!requiredRole) {
    return children;
  }

  // If user has a role but it doesn't match the required role,
  // redirect to their respective dashboard
  if (user.role && user.role.toUpperCase() !== requiredRole.toUpperCase()) {
    switch (user.role.toUpperCase()) {
      case 'PATIENT':
        return <Navigate to="/patient-dashboard" />;
      case 'DOCTOR':
        return <Navigate to="/doctor-dashboard" />;
      case 'ADMIN':
        return <Navigate to="/admin-dashboard" />;
      case 'RECEPTIONIST':
        return <Navigate to="/reception-dashboard" />;
      default:
        return <Navigate to="/" />;
    }
  }

  // If user has the required role, render the protected component
  return children;
};

export default PrivateRoute;