import { Link } from "react-router-dom"

export default function Nav(){
    return<>
    <>
  <header id="header" className="header d-flex align-items-center sticky-top">
    <div className="container-fluid container-xl position-relative d-flex align-items-center">
      <a href="index.html" className="logo d-flex align-items-center me-auto">
        <h1 className="">Mentor</h1>
      </a>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            {/* <a href="index.html" className=""> */}
            {/* </a> */}
            <Link to ={"/"}>Home</Link>
          </li>
          <li>
          <Link to ={"/about"}>About</Link>
          </li>
          <li>
          <Link to ={"/Courses"}>Courses</Link>
          </li>
          <li>
            <Link to ={"/Trainers"}>Trainers</Link>
          </li>
          <li>
            <Link to ={"/Events"}>Events</Link>
          </li>
          <li>
            <Link to ={"/Pricing"}>Pricing</Link>
          </li>
          <li className="dropdown has-dropdown">
            <a href="#">
              <span>Dropdown</span> <i className="bi bi-chevron-down"/>
            </a>
            <ul>
              <li>
                <a href="#">Dropdown 1</a>
              </li>
              <li className="dropdown has-dropdown">
                <a href="#">
                  <span>Deep Dropdown</span>{" "}
                  <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Dropdown 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Dropdown 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Dropdown 2</a>
              </li>
              <li>
                <a href="#">Dropdown 3</a>
              </li>
              <li>
                <a href="#">Dropdown 4</a>
              </li>
            </ul>
          </li>
  
          <li className="megamenu has-dropdown">
            <a href="#">
              <span>Mega Menu</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>

              <li>
                <a href="#">Column 1 link 1</a>
                <a href="#">Column 1 link 2</a>
                <a href="#">Column 1 link 3</a>
              </li>
              <li>
                <a href="#">Column 2 link 1</a>
                <a href="#">Column 2 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 3 link 1</a>
                <a href="#">Column 3 link 2</a>
                <a href="#">Column 3 link 3</a>
              </li>
              <li>
                <a href="#">Column 4 link 1</a>
                <a href="#">Column 4 link 2</a>
                <a href="#">Column 4 link 3</a>
              </li>
              <li>
                <a href="#">Column 5 link 1</a>
                <a href="#">Column 5 link 2</a>
                <a href="#">Column 5 link 3</a>
              </li>
            </ul>
          </li>
          <li>
            {/* <a href="Contact.html">Contact</a> */}
          </li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list" />
      </nav>
      {/* <a className="btn-getstarted" href="Courses.html">
        Get Started
      </a> */}
    </div>
  </header>

  
</>

    </>
}




 
 