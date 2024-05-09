import About from "./About";
import Nav from "../Nav/Nav";
import Count from "./Count";
import Courses from "./Courses";
import Events from "./Events";
import Features from "./Features";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Trainers from "./Trainers";
import Why from "./Why";
import { Link } from "react-router-dom";
export default function Home(){

    return<>
    <Nav/>
    <main className="main">
    <section id="hero" className="hero section">
  <img src="assets/img/hero-bg.jpg" alt=""  />
  <div className="container">
    <h2>
      Learning Today,
      <br/>
      Leading Tomorrow
    </h2>
    <p>
      We are team of talented designers making websites with Bootstrap
    </p>
    <div className="d-flex mt-4">

      <Link to ={'/Courses'} className="btn-get-started">
        Get Started
      </Link>
    </div>
  </div>
</section>

     <About/> 
     <Count/>
     <Why/>
     <Features/>
     <Courses/>
     <Trainers/>
     <Events/>
     <Pricing/>
     <Footer/>
     
    </main>
    </>
    
    
}