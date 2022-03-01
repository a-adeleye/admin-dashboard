import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Profile from "./components/Profile";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Profile />
      <BottomNav />
    </div>
  );
}

export default App;
