import "./App.css";
import Login from "./pages/login/Login";
import videoBG from "../src/assets/bg.mp4";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="relative">
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 min-w-full min-h-full object-cover z-0 "
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="p-4 h-screen flex items-center justify-center relative z-10">
        <Home />
      </div>
    </div>
  );
}

export default App;
