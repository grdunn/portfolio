import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";
import './styles/index.scss'

function App() {

  useEffect(() => {

    const nav = document.getElementById('nav');
    const work = document.getElementById('work');
    const experience = document.getElementById('experience');
    const workLink = document.getElementById('work-link');
    const experienceLink = document.getElementById('experience-link');
    const body = document.body;
    
    window.onscroll = () => readScroll();
    
    let sticky = nav.offsetTop;
    let workOffset = work.offsetTop - 25;
    let experienceOffset = experience.offsetTop - 25;
    
    function readScroll() {
      if (window.pageYOffset >= sticky) {
        body.classList.add("sticky")
      } else {
        body.classList.remove("sticky");
      }
      if (window.pageYOffset >= workOffset && window.pageYOffset < experienceOffset) {
        workLink.classList.add('active');
        experienceLink.classList.remove('active');
      } else if (window.pageYOffset >= experienceOffset) {
        experienceLink.classList.add('active');
        workLink.classList.remove('active');
      } else {
        experienceLink.classList.remove('active');
        workLink.classList.remove('active');
      }
    }


  },[]);

  return (
    <>
      <div className="o-spacer"></div>
      <nav id="nav" className="c-navigation">
        <div className="o-container c-navigation__inner">
          <ul className="c-navigation__links">
            <li><a id="work-link" href="/#work">Work</a></li>
            <li><a id="experience-link" href="/#experience">Experience</a></li>
          </ul>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>

      <footer className="c-footer">
        <div className="o-container o-container--flex">
          <div className="c-footer__copyright">
            <h3>© 2023</h3>
            <h3>Gregory Dunn</h3>
          </div>
          <div className="c-footer__grid">
            <div className="c-footer__grid--column">
              <p>grdunn@gmail.com</p>
              <p>+9144860871</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
