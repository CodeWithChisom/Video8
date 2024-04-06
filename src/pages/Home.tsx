import { NavLink, Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <NavLink to="/contact">Contact</NavLink>
      <Link to="/">Home</Link>
      <Link to="/product/23">Product 23</Link>
    </div>
  );
}
