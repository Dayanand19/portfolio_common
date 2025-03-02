export function PortfolioSection() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-heading padd-15">
          <h2>My Last Projects :</h2>
        </div>
      </div>
      <div className="row">
        {/* <!-- ==== portfolio item start ==== --> */}
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="images/portfolio-1.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- ==== portfolio item end ==== --> */}
        {/* <!-- ==== portfolio item start ==== --> */}
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="images/portfolio-2.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- ==== portfolio item end ==== --> */}
        {/* <!-- ==== portfolio item start ==== --> */}
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="images/portfolio-3.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- ==== portfolio item end ==== --> */}
        {/* <!-- ==== portfolio item start ==== --> */}
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="images/portfolio-4.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- ==== portfolio item end ==== --> */}
        {/* <!-- ==== portfolio item start ==== --> */}
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="images/portfolio-5.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- ==== portfolio item end ==== --> */}
        {/* <!-- ==== portfolio item start ==== --> */}
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src="images/portfolio-6.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- ==== portfolio item end ==== --> */}
      </div>
    </section>
  );
}
