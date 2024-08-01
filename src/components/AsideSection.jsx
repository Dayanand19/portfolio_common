export function AsideSection() {
  // const searchParams = new URLSearchParams(window.location.href.search);

  // console.log("searchParms---->", searchParams.has("home"));

  return (
    <div className="aside">
      <div className="logo">
        <a href="home">
          <span>D</span>anny
        </a>
      </div>
      <div className="nav-toggler">
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <a href="home" className="active">
            <i className="fa fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="about">
            <i className="fa fa-user"></i> About
          </a>
        </li>
        <li>
          <a href="services">
            <i className="fa fa-list"></i> Services
          </a>
        </li>
        <li>
          <a href="portfolio">
            <i className="fa fa-briefcase"></i> Portfolio
          </a>
        </li>
        <li>
          <a href="contact">
            <i className="fa fa-comments"></i> Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
