import React, { useState } from "react";
import Modal from "../components/Modal/Modal";
import AudioPlayer from "../components/AudioPlayer";

function Portfolio() {
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const showModal = (val) => (e) => {
    setModalContent(val);
    setModalActive(true);
  };

  const closeModal = (childData) => {
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

          {/* List of Work */}
          <div className="col-start-1 lg:col-span-2 col-span-6" data-animate>
            <h4 className="mb-12">Web</h4>
            <ul>
              <li>
                <a
                  className="link-external"
                  target="_blank"
                  href="https://destiny-xur-38d218cf797c.herokuapp.com"
                >
                  Xur Inventory
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M0.5 7H13.5"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.5L13.5 7L10 3.5"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
                  href="https://github.com/punkave/pk-pattern-library"
                >
                  Apostrophe Pattern Library
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M0.5 7H13.5"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.5L13.5 7L10 3.5"
                      stroke="#000001"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <p>
                  An internal styleguide scaffolding tool intended for projects
                  built using the Apostrophe content management system.
                </p>
              </li>
              <li>*Full list coming soon.</li>
            </ul>
          </div>
          <div
            className="col-start-1 col-span-6 lg:col-start-3 lg:col-span-2"
            data-animate
          >
            <h4 className="mb-12">Audio</h4>
            <ul>
              <li>
                <a href="/#f51">F51 Amp Build</a>
                <p>
                  The build process of a Fender 57 custom champ tube amplifier.
                </p>
              </li>
              <li>
                <button className="link" onClick={showModal(<AudioPlayer />)}>
                  "Deathless"
                </button>
                <p>
                  "The type of grandeur it captures is achingly personal, an
                  epic only in the sense of how every day can be a battle. It’s
                  a headrush of emotions, but one that leaves you restored at
                  the end rather than feeling down.." - Stereogum
                </p>
              </li>
              <li>
                <button className="link" onClick={showModal("Hello")}>
                  "Kingfisher"
                </button>
                <p>
                  "This LP is carefully constructed and pushes all the right
                  emotional buttons to great effect, balancing its angst-ridden
                  lyrics with a sound that’s as clear as glass. Kingfisher is
                  absolutely fabulous and a thrilling discovery, regardless if
                  you accidentally stumble across this or not." - PopMatters
                </p>
              </li>
            </ul>
          </div>
          <div
            className="col-start-1 col-span-6 lg:col-start-5 lg:col-span-2"
            data-animate
          >
            <h4 className="mb-12">Misc</h4>
            <ul>
              <li>
                <p>
                  Send me an <a href="mailto:grdunn@gmail.com">email.</a>
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
                  Connect on{" "}
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
          </div>
          <div className="col-start-1 lg:col-start-2 col-span-6 lg:col-span-4">
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
                included Design Advocacy Group, Covenant House PA, Trenton250,
                and Georgetown University.{" "}
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
          </div>
        </div>
      </div>
      <Modal active={modalActive} comp={modalContent} callback={closeModal} />
    </>
  );
}

export default Portfolio;
