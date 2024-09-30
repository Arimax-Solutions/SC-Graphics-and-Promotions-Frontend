import { useLocation } from 'react-router-dom';
import Navbar from './navbar';
import AdminNavbar from './AdminNavbar';

const Layout = ({ children }) => {
  const location = useLocation(); // Now this is inside a Router context
  const isAdminPage = location.pathname.startsWith('/admin');

  // Define routes where no navbar should be displayed
  const noNavbarRoutes = ['/login'];

  return (
    <div>
      {/* Conditionally render the AdminNavbar or Navbar */}
      {!noNavbarRoutes.includes(location.pathname) && (
        isAdminPage ? <AdminNavbar /> : <Navbar />
      )}
      {children} {/* Render the page content here */}
    </div>
  );
};

export default Layout;
