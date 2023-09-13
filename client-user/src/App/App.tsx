import TheNavbar from "@/layouts/TheNavbar";
import TheHeader from "@/layouts/TheHeader";
import TheMain from "@/layouts/TheMain";
import TheFooter from "@/layouts/TheFooter";
import "./App.css";
import TheCart from "@/views/TheCart";
import TheFastFoodList from "@/pages/TheFastFoodList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TheLandingPage from "@/views/TheLandingPage";
const App: React.FC = () => {
  return (
    // <>
    // <TheNavbar />
    // <TheHeader />
    // <TheMain/>
    // <TheFooter />
    // </>

    <Router>
      <Routes>
        <Route path="/" element={<TheLandingPage />}>
          <Route path="/" element={<TheFastFoodList fastFoodList={undefined} loading={false} children={undefined} />}></Route>
          <Route path="/cart" element={<TheCart />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
