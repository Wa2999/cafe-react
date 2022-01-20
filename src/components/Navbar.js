import { useContext } from "react";
import { Link } from "react-router-dom";
import CoffeeContext from "../utils/CoffeeContext";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { IoMdPersonAdd } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";

function Navbar() {
  const { logout } = useContext(CoffeeContext);
  return (
    <>
      <div className="coffeenav">
        <nav id="navbar">
          <div id="logo-main">
            <h3>CAFE</h3>
          </div>
          <ul>
            <li>
              <Link to="/">
                <TiHome />
              </Link>
            </li>
            {localStorage.tokenCoffee ? (
              <li>
                <Link to="/profile">
                  <CgProfile />
                </Link>
              </li>
            ) : null}

            {localStorage.tokenCoffee ? (
              <li>
                <Link to="/" onClick={logout}>
                  <FiLogOut />
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/signup">
                    <IoMdPersonAdd />
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <FiLogIn />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
