export function ContactSection() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have You Any Questions?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICE</h4>
        <div className="row">
          {/* <!-- ==== Contact info item start ==== --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h4>Call Us On</h4>
            <p>+19048783636</p>
          </div>
          {/* <!-- ==== Contact info item end ==== --> */}
          {/* <!-- ==== Contact info item start ==== --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-map-marker-alt"></i>
            </div>
            <h4>Office</h4>
            <p>Dallas</p>
          </div>
          {/* <!-- ==== Contact info item end ==== --> */}
          {/* <!-- ==== Contact info item start ==== --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h4>Email</h4>
            <p>dayanand0719@gmail.com</p>
          </div>
          {/* <!-- ==== Contact info item end ==== --> */}
          {/* <!-- ==== Contact info item start ==== --> */}
          <div className="contact-info-item padd-15">
            <div className="icon">
              <i className="fa fa-globe-europe"></i>
            </div>
            <h4>Website</h4>
            <p>www.google.com</p>
          </div>
          {/* <!-- ==== Contact info item end ==== --> */}
        </div>
        <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
        <h4 className="contact-sub-title padd-15">
          I'M VERY RESPONSIVE TO MESSAGES
        </h4>
        {/* <!-- ==== Contact Form ==== --> */}
        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    name=""
                    className="form-control"
                    id=""
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <button type="submit" className="btn">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
