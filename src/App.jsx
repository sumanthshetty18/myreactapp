import './App.css';
import Navbar from './Components/Navbar';
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="function" element={<FuncComp />}></Route>
        <Route path="class" element={<ClassComp />}></Route>
      </Routes>
    </div>
  );
}

export default App;