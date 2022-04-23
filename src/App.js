
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Notfound from "./pages/Notfound"
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';
import Navbar from './component/NavBar';

function App() {
  return (
    <div className="">
      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/notfound" element={<Notfound/>}/>
    </Routes>
</div>
  );
}

export default App;
