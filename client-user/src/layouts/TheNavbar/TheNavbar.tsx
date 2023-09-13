import { NavLink } from "react-router-dom";

const TheNavbar = () => {
  
  return (
    <nav className="py-4 bg-green-900 text-white shadow">
      <div className="container mx-auto px-4">
        <ul className="flex items-center gap-x-4 mb-0">
          <NavLink
            to={"/"}
            className="text-primary-500 hover:text-red-500 capitalize"
          >
            خانه
          </NavLink>
          <NavLink
            to={"/cart"}
            className="text-primary-500 hover:text-red-500 capitalize"
          >
            سبد خرید
          </NavLink>


  

        </ul>
      </div>
    </nav>
  );
};
export default TheNavbar;