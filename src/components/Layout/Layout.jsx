import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <Link to="/contacts">Contacts</Link>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
