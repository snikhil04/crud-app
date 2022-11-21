import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import ViewStudent from './components/ViewStudent';


function App() {

  const BASE_API_URL = "http://localhost:8080/api/v1/student";

  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home url={BASE_API_URL} />} />
          <Route exact path='/createStudent' element={<AddStudent url={BASE_API_URL} />} />
          <Route exact path='/updateStudent/:studentId' element={<UpdateStudent url={BASE_API_URL} />} />
          <Route exact path='/viewStudent/:studentId' element={<ViewStudent url={BASE_API_URL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
