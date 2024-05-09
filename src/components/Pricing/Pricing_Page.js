import Nav from "../Nav/Nav"
    import Pricing from "../Home/Pricing"
import Footer from "../Home/Footer"

export default function Pricing_Page(){
    return<>
   <Nav/>
    {/* <Pricing/> */}
    <section id="pricing" className="pricing section">
  <div className="container">
    <div className="row gy-3">
      <div className="col-xl-3 col-lg-6" >
        <div className="pricing-item">
          <h3>Free</h3>
          <h4><sup>$</sup>0<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li className="na">Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-xl-3 col-lg-6" >
        <div className="pricing-item featured">
          <h3>Business</h3>
          <h4><sup>$</sup>19<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li className="na">Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-xl-3 col-lg-6">
        <div className="pricing-item">
          <h3>Developer</h3>
          <h4><sup>$</sup>29<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li>Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>{/* End Pricing Item */}
      <div className="col-xl-3 col-lg-6">
        <div className="pricing-item">
          <span className="advanced">Advanced</span>
          <h3>Ultimate</h3>
          <h4><sup>$</sup>49<span> / month</span></h4>
          <ul>
            <li>Aida dere</li>
            <li>Nec feugiat nisl</li>
            <li>Nulla at volutpat dola</li>
            <li>Pharetra massa</li>
            <li>Massa ultricies mi</li>
          </ul>
          <div className="btn-wrap">
            <a href="#" className="btn-buy">Buy Now</a>
          </div>
        </div>
      </div>{/* End Pricing Item */}
    </div>
  </div>
</section>
    <Footer/>
   </>
}