import { useThemeContext } from "@/stores/app.context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TheUser from "@/views/TheUser";
// import TheBag from "@/views/TheCart";
import TheCart from "@/views/TheCart";

const TheMain = () => {
  const theme = useThemeContext();
  return (
    <main className={theme.darkMode ? "bg-light" : "bg-dark"}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<TheUser />}></Route> */}
          <Route path="/cart" element={<TheCart />}></Route>
        </Routes>
      </Router>
    </main>
  );
};
export default TheMain;
