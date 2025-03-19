import React from "react";
// import { GlobalDataContext } from "../../context/context";
import { ButtonContent } from "../global/boton/ButtonContent";
/* import { GiRibbonMedal, GiHammerNails } from "react-icons/gi"; */
/* import { AiOutlineTeam } from "react-icons/ai"; */
// import { IoMdHammer } from "react-icons/io";
function HeroVideo({ urlVideo, title, texts }) {
  // const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <div className="w-full relative content_video flex justify-center">
        <video
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src={urlVideo} type="video/mp4" />
        </video>
        <div className="flex flex-col md:w-4/5 mx-auto absolute md:pt-[350px] pt-80 md:text-start text-center text-white">
          <div className="w-full text-center">
            <h1 className="text-[30px] md:text-[3em] lg:text-[4em]">{title}</h1>
            <p className="px-5 md:px-[5%]">{texts}</p> 
            <ButtonContent btnStyle="three" />
          </div>
          <div className="w-full flex flex-row justify-center md:px-72 md:pt-5 ">
            <div className="w-[50%] md:-mr-20 -mr-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/video1-f8800.appspot.com/o/years.png?alt=media&token=84d6aa18-fbbb-4384-a21a-5dd6d455f87e"
                alt="years of experience"
                className="md:w-[600px] md:h-[270px] w-[100%] object-contain"
              />
            </div>
            <div className="w-[50%] md:-ml-10 -ml-10 md:pt-0 pt-7">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/video1-f8800.appspot.com/o/sastifaction.png?alt=media&token=5454bc3a-2152-434d-8f38-1deeafe2898d"
                alt="certificated"
                className="md:w-[600px] md:h-[280px] w-[70%] md:ml-0 ml-10 md:mt-0 -mt-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroVideo;
