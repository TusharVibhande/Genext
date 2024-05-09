import { Link } from "react-router-dom";

export default function Features(){
    return<>

<section id="features" className="features section">
  <div className="container">
    <div className="row gy-4">
      <div className="col-lg-3 col-md-4">
        <div className="features-item">
          <i className="bi bi-eye" style={{"color":"#ffbb2c"}} />
          <h3><Link className="stretched-link">Lorem Ipsum</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4">
        <div className="features-item">
          <i className="bi bi-infinity" style={{"color":"#5578ff"}} />
          <h3><Link className="stretched-link">Dolor Sitema</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4">
        <div className="features-item">
          <i className="bi bi-mortarboard" style={{"color":"#e80368"}} />
          <h3><Link className="stretched-link">Sed perspiciatis</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" >
        <div className="features-item">
          <i className="bi bi-nut" style={{"color":"#e361ff"}} />
          <h3><Link className="stretched-link">Magni Dolores</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4"> 
        <div className="features-item">
          <i className="bi bi-shuffle" style={{"color":"#47aeff"}} />
          <h3><Link className="stretched-link">Nemo Enim</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4">
        <div className="features-item">
          <i className="bi bi-star" style={{"color":"#ffa76e"}} />
          <h3><Link className="stretched-link">Eiusmod Tempor</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4">
        <div className="features-item">
          <i className="bi bi-x-diamond" style={{"color":"#11dbcf"}} />
          <h3><Link className="stretched-link">Midela Teren</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" >
        <div className="features-item">
          <i className="bi bi-camera-video" style={{"color":"#4233ff"}} />
          <h3><Link className="stretched-link">Pira Neve</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4">
        <div className="features-item">
          <i className="bi bi-command" style={{"color":"#b2904f"}} />
          <h3><Link className="stretched-link">Dirada Pack</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" >
        <div className="features-item">
          <i className="bi bi-dribbble" style={{"color":"#b20969"}} />
          <h3><Link className="stretched-link">Moton Ideal</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" >
        <div className="features-item">
          <i className="bi bi-activity" style={{"color":"#ff5828"}} />
          <h3><Link className="stretched-link">Verdo Park</Link></h3>
        </div>
      </div>{/* End Feature Item */}
      <div className="col-lg-3 col-md-4" >
        <div className="features-item">
          <i className="bi bi-brightness-high" style={{"color":"#29cc61"}} />
          <h3><Link className="stretched-link">Flavor Nivelanda</Link></h3>
        </div>
      </div>{/* End Feature Item */}
    </div>
  </div>
</section>
</>
}