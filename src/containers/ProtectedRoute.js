import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../providers/useAuth';

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }
  return children;
};
