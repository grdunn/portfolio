import { Outlet, Link } from "react-router-dom";
import './styles/index.scss'

function App() {

  return (
    <>
      <nav className="c-navigation">
        <div className="o-container c-navigation__inner">
          <ul className="c-navigation__links">
            <li><a href="/">Work</a></li>
            <li><a>Experience</a></li>
            <li><a href="https://www.eevaphilly.com">Eeva</a></li>
            <li><a>Contact</a></li>
            <li><Link to={`test`}>Test</Link></li>
          </ul>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    
      
    

      <footer>
        {/* <div className="o-container">
          <div className="o-grid__one">
            <div className="o-paragraph">
              <p><a href="#">grdunn@gmail.com</a></p>
              <p><a href="#">914-486-0871</a></p>
            </div>
          </div>
        </div> */}
      </footer>
    </>
  )
}

export default App
