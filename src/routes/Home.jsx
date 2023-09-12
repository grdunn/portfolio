import Card from '../components/Card.jsx'
import Data from './portfolio.js'

function Home() {

    return (
      <>
      <div className="o-container o-container--main">
        <div className="o-grid">  
          <div className="o-grid__one">
            <h2>Web developer, audio engineer, musician, creative type.</h2>  
          </div> 
        </div>
      </div>

      <a className="offset-100" id="work"></a>
      <section className="o-container o-container--section">
        <div className="o-grid">
          <div className="o-grid__one">
            <div className="c-portfolio-grid">
              <div className="c-portfolio-grid__wrapper">
                { Data.map((item) => (
                  <Card 
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    link={item.link}
                    tag={item.tag}
                    key={Math.random()}
                  />
                ))}
              </div>
            </div>
          </div> 
        </div>
      </section>

      <a className="offset-50" id="experience"></a>
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
      </>
    )
}

export default Home