export function HomeSection() {
  return (
    <section className="home active section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Greetings, My name is
              <span className="name">Dayanand Reddy Kallem</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">Web Developer</span>
            </h3>
            <p>
              I'm a web Developer with a creative twist. I'm passionate about
              building beautiful and functional websites. I'm also passionate
              about learning new technologies.
            </p>
            <a href="/download" className="btn">
              Download CV
            </a>
          </div>
          <div className="home-img padd-15">
            <img src="images/hero.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
