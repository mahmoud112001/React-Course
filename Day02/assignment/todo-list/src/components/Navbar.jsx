import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 text-xs ${
      isActive ? "text-green-700 font-bold" : "text-gray-500"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-green-600 px-6 py-2 flex justify-around items-center">
      <NavLink to="/" end className={linkClass}>
        <i className="fa-solid fa-house text-lg"></i>
        <span>Home</span>
      </NavLink>
      <NavLink to="/tasks" className={linkClass}>
        <i className="fa-solid fa-list-check text-lg"></i>
        <span>Tasks</span>
      </NavLink>
      <NavLink to="/profile" className={linkClass}>
        <i className="fa-solid fa-user text-lg"></i>
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}