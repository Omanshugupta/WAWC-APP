import './Navbar.css'
import NavbarList from './NavbarList'
import NavbarLogo from './NavbarLogo'
function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="navbar">
        {/* navbarlogo */}
        <NavbarLogo></NavbarLogo>
        {/* navbar list */}
        <NavbarList></NavbarList>
      </nav>
    </>
  );
}
export default Navbar;
