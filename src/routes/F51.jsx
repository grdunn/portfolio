import { React, useEffect } from "react";

function F51() {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <div className="container mx-auto mt-32 lg:mt-52 px-12">
        <div className="grid gap-x-20 grid-cols-6">
          <div className="col-start-1 col-span-1" data-animate>
            <a href="/" className="arrow-index mb-12">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 11.5L0.5 8.5L3.5 5.5"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5 2.5V4.5C13.5 5.56087 13.0786 6.57828 12.3284 7.32843C11.5783 8.07857 10.5609 8.5 9.5 8.5H0.5"
                  stroke="#000001"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Home
            </a>
          </div>

          <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-5 lg:col-span-4 mb-6 md:mb-24 z-10">
            <h1 className="mb-12">Fender F51 Champ Clone</h1>
            <p>
              The build process of a Fender 57 custom champ tube amplifier.
              Constructed during the hibernation months of Covid-19 in the
              basement of my small Philly row home.
            </p>
          </div>

          <div className="col-start-1 col-span-6 md:col-span-3 my-12 z-10">
            <figure>
              <img src="/images/f51/f51_front.jpg" />
              <figcaption>
                The front panel of the completed tweed Champ.
              </figcaption>
            </figure>
          </div>

          <div className="col-start-1 col-span-6 md:col-span-3 my-12">
            <figure>
              <img src="/images/f51/f51_back.jpg" />
              <figcaption>
                The rear side of the amp with the back panel removed.
              </figcaption>
            </figure>
          </div>
          <div className="col-start-1 lg:col-start-2 col-span-6 lg:col-span-4 my-6 md:my-24">
            <p className="mb-12">
              The core kit was purchased from <a href="#">FranklynAmps</a>, a
              custom and hand built amp shop in Franklin, North Carolina. The
              kit included the chassis, F&T filter caps, Mallory Tone Carbon
              Comp resistors, all mounting hardware, and copper ground & wiring.
            </p>
            <p>
              Since this was the first piece of audio equipment I've worked on
              that required a high voltage (lethal, even!), this took me several
              weeks to complete. The filter capacitors can store a charge in
              them for several days, even after the amp is turned off.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-x-20 grid-cols-6">
        <div className="col-start-1 col-span-4 my-12 z-10">
          <figure className="p-12 pr-24">
            <img src="/images/f51/f51_collage1.png" />
            <figcaption>
              An early messy configration of positioning the board into the
              chassis.
            </figcaption>
          </figure>
        </div>
        <div className="col-start-5 col-span-2 my-12">
          <figure className="-ml-12 mb-24">
            <img src="/images/f51/f51_collage2.jpg" />
            <figcaption>Speaker wiring connection.</figcaption>
          </figure>
          <figure className="mr-12">
            <img src="/images/f51/f51_collage4.jpg" />
            <figcaption>Schematic for the power transformer.</figcaption>
          </figure>
        </div>
      </div>
      <div className="container mx-auto mb-36 px-12">
        <div className="grid gap-x-20 grid-cols-6">
          <div className="col-start-1 col-span-6 md:col-span-3 my-12">
            <h2>Specs & Details</h2>
            <ul className="ul">
              <li>F&T filters, Mallory tone caps.</li>
              <li>Carbon Comp and metal film resistors</li>
              <li>Alpha pots, Carling switches and Switchcraft jacks</li>
              <li>Ceramic tube sockets</li>
              <li>Heyboer Transformer Set</li>
              <li>Alnico Signature 8 Weber Speaker</li>
              <li>JJ vacuum tubes</li>
              <li>Lots of shocks and near death experiences.</li>
            </ul>
          </div>
          <div className="col-start-1 md:col-start-4 md:col-span-3 col-span-6 my-12">
            <video width="100%" height="auto" playsInline autoPlay muted loop>
              <source src="/images/f51/power.mp4" type="video/mp4" />
              <source src="/images/f51/power.ogg" type="video/ogg" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default F51;
