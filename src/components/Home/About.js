export default function About(){
    return <>
    <section id="about" className="about section">
  <div className="container">
    <div className="row gy-4">
      <div
        className="col-lg-6 order-1 order-lg-2"
      >
        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
      </div>
      <div
        className="col-lg-6 order-2 order-lg-1 content"

      >
        
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
          <li>
            <i className="bi bi-check-circle" />{" "}
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </li>
          <li>
            <i className="bi bi-check-circle" />{" "}
            <span>
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </span>
          </li>
          <li>
            <i className="bi bi-check-circle" />{" "}
            <span>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate trideta storacalaperda
              mastiro dolore eu fugiat nulla pariatur.
            </span>
          </li>
        </ul>
        <a href="#" className="read-more">
          <span>Read More</span>
          <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  </div>
</section> 

</>
}
