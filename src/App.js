import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About_Page from './components/About/About_Page';
import Events_Page from './components/Events/Events_Page';
import Courses_Page from './components/Courses/Courses_Page';
import Trainers_Page from './components/Trainers/Trainers_Page';
import Pricing_Page from './components/Pricing/Pricing_Page';
import CourseDetails_Page from './components/CourseDetails/CourseDetails_Page';


function App() {
  return (
   <Routes>


    <Route path='/' element={<Home/>}> </Route>
    <Route path='/about' element={<About_Page/>}> </Route>
    <Route path='/Courses' element={<Courses_Page/>}></Route>
    <Route path='/Trainers' element={<Trainers_Page/>}></Route>
    <Route path='/Events' element={<Events_Page/>}></Route>
    <Route path='/Pricing' element={<Pricing_Page/>}></Route>
    <Route path='/CourseDetails_Page' element={<CourseDetails_Page/>}></Route>
    
   </Routes>
  );
}
  
export default App;
