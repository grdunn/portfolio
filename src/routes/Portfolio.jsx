import React, { useState } from "react";
import Modal from "../components/Modal/Modal";

function Video(props) {
  return (
    <div>
      <iframe
        className="youtube-video"
        width="100%"
        src={props.video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function Portfolio() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [mode, setMode] = useState("dark");

  const handleMode = () => {
    const html = document.querySelector("html");
    if (mode === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
      setMode("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
      setMode("dark");
    }
  };

  const showModal = (val) => (e) => {
    setModalContent(val);
    setModalActive(true);
  };

  const closeModal = () => {
    setModalActive(false);
    setModalContent("");
  };

  return (
    <>
      <div className="container mx-auto mt-32 lg:mt-52 mb-36 lg:px-12 px-8 dark:text-zinc-200">
        <div className="grid gap-x-20 grid-cols-6">
          <div className="col-start-1 col-span-6 lg:col-start-2 lg:col-span-4">
            <h1 data-animate className="mb-12 font-light">
              Gregory Dunn
            </h1>
            <p className="mb-12 font-serif text-5xl" data-animate>
              Currently working & living in the city of Philadelphia, designing
              and developing projects on the web. Previously an owner and
              operator of a small bakery & restaurant. Active hobbyist.
            </p>
            <svg
              className="squiggle"
              data-animate
              width="400"
              viewBox="0 0 400 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 106.054L1 106.446L2 106.798L3 107.108L4 107.374L5 107.595L6 107.769L7 107.894L8 107.972L9 108L10 107.979L11 107.908L12 107.789L13 107.622L14 107.408L15 107.148L16 106.844L17 106.498L18 106.112L19 105.688L20 105.229L21 104.738L22 104.218L23 103.671L24 103.102L25 102.514L26 101.911L27 101.295L28 100.672L29 100.044L30 99.4164L31 98.7922L32 98.1755L33 97.57L34 96.9795L35 96.4076L36 95.8578L37 95.3336L38 94.8381L39 94.3745L40 93.9456L41 93.554L42 93.2021L43 92.8921L44 92.626L45 92.4053L46 92.2315L47 92.1055L48 92.0283L49 92.0001L50 92.0213L51 92.0917L52 92.2108L53 92.378L54 92.5921L55 92.852L56 93.1559L57 93.502L58 93.8881L59 94.3119L60 94.7709L61 95.262L62 95.7823L63 96.3287L64 96.8977L65 97.4858L66 98.0894L67 98.7048L68 99.3282L69 99.9558L70 100.584L71 101.208L72 101.825L73 102.43L74 103.021L75 103.592L76 104.142L77 104.666L78 105.162L79 105.625L80 106.054L81 106.446L82 106.798L83 107.108L84 107.374L85 107.595L86 107.769L87 107.894L88 107.972L89 108L90 107.979L91 107.908L92 107.789L93 107.622L94 107.408L95 107.148L96 106.844L97 106.498L98 106.112L99 105.688L100 105.229L101 104.738L102 104.218L103 103.671L104 103.102L105 102.514L106 101.911L107 101.295L108 100.672L109 100.044L110 99.4164L111 98.7922L112 98.1755L113 97.57L114 96.9795L115 96.4076L116 95.8578L117 95.3336L118 94.8381L119 94.3745L120 93.9456L121 93.554L122 93.2021L123 92.8921L124 92.626L125 92.4053L126 92.2315L127 92.1055L128 92.0283L129 92.0001L130 92.0213L131 92.0917L132 92.2108L133 92.378L134 92.5921L135 92.852L136 93.1559L137 93.502L138 93.8881L139 94.3119L140 94.7709L141 95.262L142 95.7823L143 96.3287L144 96.8977L145 97.4858L146 98.0894L147 98.7048L148 99.3282L149 99.9558L150 100.584L151 101.208L152 101.825L153 102.43L154 103.021L155 103.592L156 104.142L157 104.666L158 105.162L159 105.625L160 106.054L161 106.446L162 106.798L163 107.108L164 107.374L165 107.595L166 107.769L167 107.894L168 107.972L169 108L170 107.979L171 107.908L172 107.789L173 107.622L174 107.408L175 107.148L176 106.844L177 106.498L178 106.112L179 105.688L180 105.229L181 104.738L182 104.218L183 103.671L184 103.102L185 102.514L186 101.911L187 101.295L188 100.672L189 100.044L190 99.4164L191 98.7922L192 98.1755L193 97.57L194 96.9795L195 96.4076L196 95.8578L197 95.3336L198 94.8381L199 94.3745L200 93.9456L201 93.554L202 93.2021L203 92.8921L204 92.626L205 92.4053L206 92.2315L207 92.1055L208 92.0283L209 92.0001L210 92.0213L211 92.0917L212 92.2108L213 92.378L214 92.5921L215 92.852L216 93.1559L217 93.502L218 93.8881L219 94.3119L220 94.7709L221 95.262L222 95.7823L223 96.3287L224 96.8977L225 97.4858L226 98.0894L227 98.7048L228 99.3282L229 99.9558L230 100.584L231 101.208L232 101.825L233 102.43L234 103.021L235 103.592L236 104.142L237 104.666L238 105.162L239 105.625L240 106.054L241 106.446L242 106.798L243 107.108L244 107.374L245 107.595L246 107.769L247 107.894L248 107.972L249 108L250 107.979L251 107.908L252 107.789L253 107.622L254 107.408L255 107.148L256 106.844L257 106.498L258 106.112L259 105.688L260 105.229L261 104.738L262 104.218L263 103.671L264 103.102L265 102.514L266 101.911L267 101.295L268 100.672L269 100.044L270 99.4164L271 98.7922L272 98.1755L273 97.57L274 96.9795L275 96.4076L276 95.8578L277 95.3336L278 94.8381L279 94.3745L280 93.9456L281 93.554L282 93.2021L283 92.8921L284 92.626L285 92.4053L286 92.2315L287 92.1055L288 92.0283L289 92.0001L290 92.0213L291 92.0917L292 92.2108L293 92.378L294 92.5921L295 92.852L296 93.1559L297 93.502L298 93.8881L299 94.3119L300 94.7709L301 95.262L302 95.7823L303 96.3287L304 96.8977L305 97.4858L306 98.0894L307 98.7048L308 99.3282L309 99.9558L310 100.584L311 101.208L312 101.825L313 102.43L314 103.021L315 103.592L316 104.142L317 104.666L318 105.162L319 105.625L320 106.054L321 106.446L322 106.798L323 107.108L324 107.374L325 107.595L326 107.769L327 107.894L328 107.972L329 108L330 107.979L331 107.908L332 107.789L333 107.622L334 107.408L335 107.148L336 106.844L337 106.498L338 106.112L339 105.688L340 105.229L341 104.738L342 104.218L343 103.671L344 103.102L345 102.514L346 101.911L347 101.295L348 100.672L349 100.044L350 99.4164L351 98.7922L352 98.1755L353 97.57L354 96.9795L355 96.4076L356 95.8578L357 95.3336L358 94.8381L359 94.3745L360 93.9456L361 93.554L362 93.2021L363 92.8921L364 92.626L365 92.4053L366 92.2315L367 92.1055L368 92.0283L369 92.0001L370 92.0213L371 92.0917L372 92.2108L373 92.378L374 92.5921L375 92.852L376 93.1559L377 93.502L378 93.8881L379 94.3119L380 94.7709L381 95.262L382 95.7823L383 96.3287L384 96.8977L385 97.4858L386 98.0894L387 98.7048L388 99.3282L389 99.9558L390 100.584L391 101.208L392 101.825L393 102.43L394 103.021L395 103.592L396 104.142L397 104.666L398 105.162L399 105.625"
                stroke="black"
                strokeWidth="5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="col-start-1 col-span-6 mb-12" data-animate>
            <h4>Relevant Work</h4>
          </div>
          <div
            className="work col-start-1 lg:col-span-2 col-span-6"
            data-animate
          >
            <ul>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://warrencenter.upenn.edu"
                >
                  <img
                    className="rounded-lg mb-12"
                    src="/images/warren_center.jpg"
                  />
                  <span className="font-serif text-4xl mb-4">
                    The Warren Center for Network & Data Sciences
                  </span>
                </a>
                <p>
                  The Warren Center for Network & Data Sciences fosters research
                  and innovation in interconnected social, economic and
                  technological systems.
                </p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="http://globalcities.georgetown.edu"
                >
                  <img src="/images/gugc2.png" className="rounded-lg mb-12" />
                  <span className="font-serif text-4xl">
                    Georgetown University Global Cities
                  </span>
                </a>
                <p>
                  An academic community dedicated to creating and sharing
                  inter-disciplinary knowledge of cities, their communities and
                  the opportunities associated with unprecedented global
                  urbanization.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="work col-start-1 lg:col-span-2 col-span-6"
            data-animate
          >
            <ul>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://www.covenanthousepa.org"
                >
                  <img
                    src="/images/covenant.png"
                    className="rounded-lg mb-12"
                  />
                  <span className="font-serif text-4xl mb-4">
                    Covenant House PA
                  </span>
                </a>
                <p>Serving youth experiencing homelessness in Pennsylvania.</p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://pair.upenn.edu"
                >
                  <img className="rounded-lg mb-12" src="/images/pair.png" />
                  <span className="font-serif text-4xl mb-5">
                    PAIR @ Penn Medicine
                  </span>
                </a>
                <p>
                  High-quality evidence to advance healthcare policies and
                  practices with the goals of improving the lives of all people
                  affected by serious illness and removing the barriers to
                  health equity that seriously ill patients commonly face.
                </p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://github.com/punkave/pk-pattern-library"
                >
                  <span className="font-serif text-4xl mb-5">
                    Apostrophe Pattern Library
                  </span>
                </a>
                <p>
                  An internal styleguide scaffolding tool intended for projects
                  built using the Apostrophe content management system.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="work col-start-1 lg:col-span-2 col-span-6"
            data-animate
          >
            <ul>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://sustainvc.com/what-we-do"
                >
                  <img className="rounded-lg mb-12" src="/images/sustain.png" />
                  <span className="font-serif text-4xl mb-5">Sustain VC</span>
                </a>
                <p>
                  The SustainVC series of impact investment funds back
                  innovative entrepreneurs that share a vision of a sustainable,
                  more equitable, and healthier world.
                </p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://trenton250.org"
                >
                  <img src="/images/trenton.png" className="rounded-lg mb-12" />
                  <span className="font-serif text-4xl mb-5">Trenton250</span>
                </a>
                <p>
                  Trenton’s long-range Comprehensive Master Plan that will guide
                  the City from now to the 250th Anniversary of its
                  incorporation in 2042.
                </p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://destiny-xur-38d218cf797c.herokuapp.com"
                >
                  <span className="font-serif text-4xl mb-5">
                    Xur Inventory
                  </span>
                </a>
                <p>
                  A little tool that pulls live game data from Destiny2.
                  Specifically, the weekly inventory of the character Xur.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-start-1 lg:col-start-2 col-span-6 lg:col-span-4 mt-28">
            <h2 className="mb-12">Experience</h2>
            <div className="mb-12">
              <p>
                From July 2019 to October 2020 I worked with the team at{" "}
                <a target="_blank" href="http://apostrophecms.com">
                  ApostropheCMS
                </a>
                , contributing to various Apostrophe plugins and extensions. A
                notable client included <a href="#">Michelin</a>, supporting
                over 100 websites in various localizations. Strategized and
                contributed to the initial component library during the
                development of Apostrophe 3 using Vue.js
              </p>
            </div>
            <div className="mb-12">
              <p>
                I also built various web tools and custom websites within the
                art, education, and non-profit sectors with the wonderul team at{" "}
                <a target="_blank" href="https://punkave.com">
                  P'unk Avenue.
                </a>{" "}
                From May 2016 through June 2019, I managed projects, included
                client and stakeholder communication, through development,
                content creation, deployment &amp; support. Select clients
                included Design Advocacy Group, University Of Pennsylvania,
                Covenant House, and Georgetown University.{" "}
              </p>
            </div>
            <div className="mb-12">
              <p>
                In 2015, I was an instructional associate for a 3 month
                immersive web development course at{" "}
                <a target="_target" href="https://generalassemb.ly">
                  General Assembly.
                </a>{" "}
                I led both morning exercies, and afternoon review lectures that
                covered topics ranging from CSS, to computer science using self
                composed materials. I worked one on one with students to discuss
                their work and progress.
              </p>
            </div>
            <div className="grid gap-x-20 grid-cols-2">
              <div className="col-start-1 col-span-1 mt-28">
                <ul>
                  <li>
                    <p>
                      Connect with me over{" "}
                      <a className="link" href="mailto:grdunn@gmail.com">
                        email.
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      View more of my development work in progress on{" "}
                      <a
                        className="link"
                        target="_blank"
                        href="https://github.com/grdunn"
                      >
                        GitHub
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
                        className="link"
                        target="_blank"
                        href="https://www.linkedin.com/in/gregrdunn"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-start-2 col-span-1 mt-28">
                <ul>
                  <li>
                    <p>
                      Check out this cool{" "}
                      <a className="link" href="/#f51">
                        guitar amp
                      </a>{" "}
                      I built.
                    </p>
                  </li>
                  <li>
                    <p>
                      Switch over to{" "}
                      <button
                        type="button"
                        onClick={handleMode}
                        className="link"
                      >
                        {mode} mode
                      </button>
                    </p>
                  </li>
                  <li>
                    <a
                      className="link"
                      target="_blank"
                      href="http://instagram.com/grdunn/"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        active={modalActive}
        title={modalContent.title}
        comp={modalContent.comp}
        callback={closeModal}
      />
    </>
  );
}

export default Portfolio;
