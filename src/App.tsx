import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Games from './routes/Games';
import Home from './routes/Home';
import Login from "./routes/Login";
import RegisterUser from "./routes/RegisterUser";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/registerUser" element={<RegisterUser/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}