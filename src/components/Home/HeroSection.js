import { ButtonContent } from "../global/boton/ButtonContent";
// import { GiRibbonMedal } from "react-icons/gi";
// import { AiOutlineTeam } from "react-icons/ai";
// import { FaRegBuilding } from "react-icons/fa";

function HeroSection({ bgImg, bgImg1, bgImg2, bgImg3, title, texts }) {
  const BgImages = [bgImg, bgImg1, bgImg2, bgImg3];
  return (
    <>
      <div className="pic-wrapper svgHerosection1  w-full h-screen">
        {BgImages.map((item, index) => {
          return (
            <figure
              key={index}
              className={`pic-${index + 1}`}
              style={{ background: `url("${item}")` }}
            ></figure>
          );
        })}
        <div className="z-[4] relative w-4/5 mx-auto h-full flex flex-col justify-center items-center md:pb-[100px] md:pt-[400px] pt-[420px] pb-[100px]">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-white text-center text-[35px] md:text-[60px]">
              {title}
            </h1>
            <p className="text-white text-center">{texts}</p>
          </div>
          <div className="w-full flex justify-center py-5">
            <ButtonContent btnStyle={"three"} />
          </div>
          <div className="w-full md:w-[100%] flex md:flex-row flex-col justify-center md:px-72 md:pt-5 ">
            <div className="md:w-[50%] w-full md:-mr-20">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/video1-f8800.appspot.com/o/years.png?alt=media&token=84d6aa18-fbbb-4384-a21a-5dd6d455f87e"
                alt="years of experience"
                className="md:w-[600px] md:h-[280px] w-[100%] object-contain"
              />
            </div>
            <div className="md:w-[50%]  w-full md:-ml-10">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/video1-f8800.appspot.com/o/sastifaction.png?alt=media&token=5454bc3a-2152-434d-8f38-1deeafe2898d"
                alt="certificated"
                className="md:w-[600px] md:h-[280px] w-[70%] md:ml-0 ml-10 md:mt-0 -mt-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" md:w-[70%] w-[100%] bg-2 text-white md:-mt-14 -mt-20 relative md:py-14 py-2 homi">
        <ul className="flex md:flex-row flex-col justify-around ml-5 md:ml-0">
          <h5 className="flex items-center" data-aos="zoom-in">
            <FaRegBuilding
              fontSize={70}
              className="text-white mr-2"
            />
            BEST SERVICE</h5>
          <h5 className="flex items-center" data-aos="zoom-in" data-aos-duration="1000">
            <AiOutlineTeam
              fontSize={70}
              className="text-white mr-2"
            />
            PROFESSIONAL TEAM</h5>
          <h5 className="flex items-center" data-aos="zoom-in" data-aos-duration="1500">
            <GiRibbonMedal
              fontSize={70}
              className="text-white"
            />BEST QUALITY</h5>
        </ul>
      </div> */}
    </>
  );
}

export default HeroSection;
