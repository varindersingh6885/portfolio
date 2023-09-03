import { useState } from "react";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="app bg-deep-blue">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
