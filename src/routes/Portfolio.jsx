import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import AudioPlayer from "../components/AudioPlayer";
import deathless from "../data/deathless_sample.mp3";

import { IconLinkExternal } from "../components/Icons";

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
      <div className="container mx-auto mt-32 lg:mt-52 mb-36 px-12">
        <div className="grid gap-x-20 grid-cols-6">
          <div className="col-start-1 col-span-6 lg:col-start-2 lg:col-span-4">
            <h1 data-animate className="mb-12">
              Gregory Dunn
            </h1>
            <p className="mb-12" data-animate>
              Currently working & living in the city of Philadelphia, designing
              and developing projects on the web. Previously an owner and
              operator of a small{" "}
              <a target="_blank" href="https://www.instagram.com/eevaphilly">
                bakery & restaurant.
              </a>
            </p>
            <p className="mb-12" data-animate>
              Prior to all of that, I traveled around the world in a 15
              passenger van playing music in bands including{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=aIaKWgjeM5A"
              >
                Say Anything
              </a>
              ,{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=myyPBLkZJaQ"
              >
                Saves The Day
              </a>
              , and{" "}
              <a
                target="_blank"
                href="https://www.youtube.com/watch?v=h76DjPUppbM&list=PLawMNLVMLgQXXVkx12J-U5A_eDFyrtmle&index=3"
              >
                Moving Mountains.
              </a>
            </p>
            <img data-animate className="squiggle" src="icons/squiggle.svg" />
          </div>
          <div className="col-start-1 col-span-6 mb-12" data-animate>
            <h4>Relevant Work</h4>
          </div>
          {/* List of Work */}
          <div className="col-start-1 lg:col-span-2 col-span-6" data-animate>
            <ul>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://warrencenter.upenn.edu"
                >
                  <span>
                    The Warren Center for Netwwork & Data Sciences
                    <IconLinkExternal />
                  </span>
                </a>
                <p>
                  Fosters research and innovation in interconnected social,
                  economic and technological systems.
                </p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://www.covenanthousepa.org"
                >
                  <span>
                    Covenant House PA
                    <IconLinkExternal />
                  </span>
                </a>
                <p>Serving youth experiencing homelessness in Pennsylvania.</p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://trenton250.org"
                >
                  <span>
                    Trenton250
                    <IconLinkExternal />
                  </span>
                </a>
                <p>
                  Trenton’s long-range Comprehensive Master Plan that will guide
                  the City from now to the 250th Anniversary of its
                  incorporation in 2042.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-start-1 lg:col-span-2 col-span-6" data-animate>
            <ul>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://pair.upenn.edu"
                >
                  <span>
                    PAIR @ Penn Medicine
                    <IconLinkExternal />
                  </span>
                </a>
                <p>Palliative and Advanced Illness Research Center.</p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://destiny-xur-38d218cf797c.herokuapp.com"
                >
                  <span>
                    Xur Inventory
                    <IconLinkExternal />
                  </span>
                </a>
                <p>
                  A little tool that pulls live game data from Destiny2.
                  Specifically, the weekly inventory of the character Xur.
                </p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://sustainvc.com/what-we-do"
                >
                  <span>
                    Sustain VC
                    <IconLinkExternal />
                  </span>
                </a>
                <p>
                  The SustainVC series of impact investment funds back
                  innovative entrepreneurs that share a vision of a sustainable,
                  more equitable, and healthier world.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-start-1 lg:col-span-2 col-span-6" data-animate>
            <ul>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://github.com/punkave/pk-pattern-library"
                >
                  <span>
                    Apostrophe Pattern Library
                    <IconLinkExternal />
                  </span>
                </a>
                <p>
                  An internal styleguide scaffolding tool intended for projects
                  built using the Apostrophe content management system.
                </p>
              </li>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="http://globalcities.georgetown.edu"
                >
                  <span>
                    Georgetown University Global Cities
                    <IconLinkExternal />
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
                In 2019, I was an instructional associate for a 3 month
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
                      Connect with me me over{" "}
                      <a href="mailto:grdunn@gmail.com">email.</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      View more of my development work in progress on{" "}
                      <a target="_blank" href="https://github.com/grdunn">
                        GitHub
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a
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
                      Check out this cool <a href="/#f51">guitar amp</a> I
                      built.
                    </p>
                  </li>
                  <li>
                    This is a{" "}
                    <button
                      className="link"
                      onClick={showModal({
                        title: "Prawn - Gradwell Sessions",
                        comp: (
                          <Video video="https://www.youtube.com/embed/nFeoclcOUjo?si=xI4LNAzMww7R28Tp" />
                        ),
                      })}
                    >
                      live studio performance
                    </button>{" "}
                    I engineered and mixed.
                  </li>
                  <li>
                    <a target="_blank" href="http://instagram.com/grdunn/">
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
