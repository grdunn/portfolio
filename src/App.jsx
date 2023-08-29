import './styles/index.scss'

function App() {

  return (
    <>

      <nav className="c-navigation">
        <div className="o-container c-navigation__inner">
          <ul className="c-navigation__links">
            <li><a>Work</a></li>
            <li><a>Experience</a></li>
            <li><a href="https://www.eevaphilly.com">Eeva</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </nav>
    
      <div className="o-container o-container--main">
        <div className="o-grid">  
          <div className="o-grid__one">
            <h2>Web developer, audio engineer, musician, restaurant lifer.</h2>  
            <p>Currently living and working in Philadelphia, PA.</p>  
          </div> 
        </div>
      </div>
      
      <section className="o-container o-container--section">
        <div className="o-grid">
          <div className="o-grid__one">
            <div className="c-portfolio-grid">
              <div className="c-portfolio-grid__wrapper">
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>Georgetown University Global Cities</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>Design Advocacy Group</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>ApostropheCMS Styleguide Tool</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>Sustain VC</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>McCormick Taylor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>Georgetown University Global Cities</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>Destiny2 Xur Inventory</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>Design Advocacy Group</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>ApostropheCMS Styleguide Tool</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>Sustain VC</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
                <div className="c-portfolio-grid__card">
                  {/* <img src="https://picsum.photos/250/150" className="c-portfolio-grid__image"/> */}
                  <h3>McCormick Taylor</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis enim. <a href="#">Read More</a></p>
                </div>
              </div>
            </div>
          </div> 
          <div className="o-grid__two">
            {/* <h4>Web Development</h4> */}
          </div>
        </div>
      </section>

      <section className="o-container o-container--section">
        <div className="o-grid">
          <div className="o-grid__one">
            <div className="o-paragraph">
              <p>Web Developer at <a href="#">Apostrophe Technologies</a> July 2019 - October 2020, Philadelphia PA.</p>
              <p>Built frontend components within the Apostrophe system. Contributed to various Apostrophe plugins and extensions. Notable clients included <a href="#">Michelin</a>, supporting over 100 websites in various localizations. Strategized and contributed to the initial component library during the development of Apostrophe 3 using Vue.js</p>
            </div>
            <div className="o-paragraph">
              <p>Web Developer at <a href="#">P'unk Avenue</a> May 2016 - June 2019, Philadelphia PA.</p>
              <p>Built various web tools and custom websites within the art, educational, and non-profit sectors. Managed projects, included client and stakeholder communication, through development, content creation, deployment & support. Select clients included Design Advocay Group, Covenant House PA, Trenton250, Georgetown University. </p>
            </div>
            <div className="o-paragraph">
              <p>Full Stack Instructional Associate at <a href="#">General Assembly</a> August 2015 - December 2019, Philadelphia PA.</p>
              <p>Instructional associate for a 3 month immersive web development course. Led both morning exercies, and afternoon review lectures that covered topics ranging from CSS, to computer science using self composed materials. Worked one on one with students to discuss their work and progress.</p>
            </div>
          </div>
        </div>
      </section>
    

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
