import './App.css';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';
function App() {
  return (
    <div>
        <Routes>
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route exact path='/logout' element={<ProtectedRoute><Logout/></ProtectedRoute>}></Route>
        </Routes>
    </div>
  );
}

export default App;
