import { React, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./styles/index.scss";

const year = new Date().getFullYear();

function App() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?zip=19125,us&appid=ccca817f9c57f4e9f759637ca6aabe77";
      const response = await fetch(url);
      const resJson = await response.json();
      setWeather(resJson.weather[0]);
      console.log(resJson);
    };
    fetchApi();
  }, []);
  return (
    <>
      <div>
        <Outlet />
      </div>
      <footer className="border-t">
        <div className="container mx-auto px-12">
          <div className="grid gap-x-20 grid-cols-6 py-12">
            <div className="flex-col lg:flex-row col-start-1 lg:col-start-2 col-span-6 lg:col-span-4 flex items-center justify-between">
              <h3 className="small mb-0 md:mb-4">{year}</h3>
              <div className="">
                {!weather ? (
                  <div></div>
                ) : (
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M11.5 9C11.5 6.51 7 0.5 7 0.5C7 0.5 2.5 6.51 2.5 9C2.5 10.1935 2.97411 11.3381 3.81802 12.182C4.66193 13.0259 5.80653 13.5 7 13.5C8.19347 13.5 9.33807 13.0259 10.182 12.182C11.0259 11.3381 11.5 10.1935 11.5 9V9Z"
                        stroke="#6d6d6d"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="ml-2 small">
                      Currently {weather.description} in Philadelphia.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
