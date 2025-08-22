import React, { useContext, useState } from 'react';
import { GlobalDataContext } from '../../context/context';

const BusinessCard = () => {
    const { rpdata } = useContext(GlobalDataContext);

    // Verificar que rpdata exista antes de desestructurarlo
    const {
        gallery = [],
    } = rpdata || {};

    const [stateFrontBack, setStateFrontBack] = useState(true);


    return (
      <div className="flex flex-col items-center justify-center w-full h-full mt-36">
        {/* Hacer visible el botón eliminando la clase 'hidden' */}
        <button
          className="flex items-center gap-2 mb-4 rounded-full py-2 px-4 bg-white shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => setStateFrontBack(!stateFrontBack)}
          aria-label="Rotate card"
        >
          <i
            className="fa-solid fa-arrows-rotate text-2xl"
            aria-hidden="true"
          ></i>
          <span className="text-sm font-sans">Rotate</span>
        </button>
        {stateFrontBack ? (
          <div className="digitalcard text-white shadow-lg rounded-lg pb-8 w-[90%] md:w-[40%] h-full md:h-[400px] flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex items-center mb-4">
                  <i className="fa fa-user text-5xl" aria-hidden="true"></i>
                  <div className="border-l-2 h-full ml-3 pl-3">
                    <h1 className="text-2xl font-semibold uppercase tracking-wide">
                      Brayan Peña 
                    </h1>
                    <h2 className="text-xl font-sans uppercase tracking-wide">
                      Owner
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 bg1">
                      <i
                        class="fa-regular fa-phone-volume text-xl text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="flex flex-col gap-2">
                      {rpdata?.dbPrincipal?.phones
                        .slice(0, 1)
                        .map((phone, index) => (
                          <a
                            key={index}
                            href={`tel:+1${phone.phone}`}
                            className="text-md font-sans font-bold"
                          >
                            {phone.phone}
                          </a>
                        ))}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3 bg1 p-2">
                      <i
                        className="fa-solid fa-envelope text-xl text-white"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div className="flex flex-col gap-2">
                      {rpdata?.dbPrincipal?.emails.map((email, index) => (
                        <a
                          key={index}
                          href={`mailto:${email.email}`}
                          className="text-md font-sans font-bold"
                        >
                          {email.email}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-r-full py-3.5 relative z-20 -bottom-1.5 bg1">
                <div className="flex items-center gap-3 pl-7">
                  <i
                    class="fa-regular fa-location-dot text-5xl text-white"
                    aria-hidden="true"
                  ></i>
                  <p className="text-md font-sans text-white">
                    {rpdata?.dbPrincipal?.location[0].address}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-between">
              <div className="flex justify-center relative mb-16 md:mb-0">
                {gallery[1] && (
                  <div
                    className="absolute top-0 left-0 w-full h-[220px] rounded-b-full border-b-8 border-white"
                    style={{
                      backgroundImage: `url(${gallery[1]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                )}
                <div className=" absolute top-0 left-0 w-full h-[220px] rounded-b-full"></div>
                <img
                  src={rpdata?.dbPrincipal?.logo}
                  alt="logo"
                  className="h-44 w-auto relative"
                />
              </div>
              <div>
                <p className="text-center text-lg font-bold capitalize">
                  Follow us on
                </p>
                <div className="py-3 rounded-l-full w-full ml-auto mb-2 bg1">
                  <div className="flex items-center justify-center h-full">
                    {/* Redes sociales */}
                    {rpdata?.dbSocialMedia?.redes.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-2xl mx-2"
                      >
                        <i
                          className={`fab fa-${social.icon}`}
                          aria-hidden="true"
                        ></i>
                      </a>
                    ))}
                    <a className='text-white text-2xl mx-' href={rpdata?.gmb?.link} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-g text-2xl text-white mx-2" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg- white shadow-lg rounded-lg w-[90%] md:w-[40%] h-[450px] md:h-[400px] flex flex-col-reverse md:flex-row digitalcard bg- [url()] bg-cover bg-center">
            <div className="py-6 w-full h-full flex flex-col justify-between">
              <div className="flex justify-center items-center">
                <img
                  src={rpdata?.dbPrincipal?.logo}
                  alt="logo"
                  className="h-48 w-auto"
                />
              </div>
              <div className="flex flex-wrap justify-center relative">
                {rpdata?.dbServices?.slice(0, 5).map((item, index) => {
                  return (
                    <p className="text-center text-lg font-bold capitalize text-white">
                      {item.name} /
                    </p>
                  );
                })}
              </div>
              <div className="flex jucestify-center">
                <div className="w-[35%]">
                  <div className="w-full h-8 rounded-r-full mb-4 bg-white"></div>
                  <div className="w-full flex justify-end relative">
                    <div className="rounded-l-full w-16 h-16 absolute -right-8 bottom-0"></div>
                    <div className="bg-white rounded-l-full w-16 h-20 absolute -right-14 -bottom-2"></div>
                  </div>
                </div>
                <div className="w-full h-16 rounded-full relative bottom-4 z-20 bg1">
                  <a
                    href="/"
                    className="flex items-center justify-center h-full text-white"
                  >
                    <i class="fa fa-globe text-2xl"></i>
                    <span className="text-lg font-sans ml-2 hidden md:block">
                      {rpdata.linkWeb}
                    </span>
                    <span className="text-md font-sans ml-2 capitalize block md:hidden text">
                      Visit our website
                    </span>
                  </a>
                </div>
                <div className="w-[35%]">
                  <div className="w-full h-8 rounded-l-full mb-4 bg-white"></div>
                  <div className="w-full flex justify-start relative">
                    <div className="rounded-r-full w-16 h-16 absolute bottom-0 -left-8"></div>
                    <div className="bg-white rounded-r-full w-16 h-20 absolute -bottom-2 -left-14 z-10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default BusinessCard;
