import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import Directories from "../components/Home/Directories";
import FormHome from "../components/Home/FormHome";
import Map from "../components/Contact/MapContent";
import BaseLayout from "../components/global/BaseLayout";
import CounterUp from "../components/global/CounterUp";
import ServicesHome from "../components/Home/ContentServicesHome";
import HeroVideo from "../components/Home/HeroVideo";
import Paletacolor from "../components/global/Paletacolor";
import BlockPrincipal from "../components/block/Block_3";
import BlockSecondary from "../components/block/Block_4";
import BlockAbout from "../components/block/Block_1";
/* import SlideBlock from "../components/block/SlideLogoForm"; */
import VideoPromocional from "../components/global/VideoPromocional";
import ContentServices from "../components/Services/ContentServices";
import GalleryContent from "../components/Gallery/GalleryContent";
import Modal from "../components/Home/Modal";
// import CustomReviews from "../components/reviews/CustomReviews";
/* import ValuesOne from "../components/values/Values_4"; */

// para agregar la frase de los años de experiencia o la licencia agregar sloganPrincipal={true}
// para agregar la lista de about agregar listsAbout={true}
// para agregar la lista de servicios agregar listsServices={true}

function Home() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="Home">
      <div className="md:max-w-full w-full">
        <Modal />
        <HeroVideo
          title={rpdata?.dbSlogan?.[2]?.slogan}
          texts={rpdata?.dbValues?.[0].description}
          urlVideo={
            "https://firebasestorage.googleapis.com/v0/b/video1-f8800.appspot.com/o/Cambria%2C%20CA.mp4?alt=media&token=4c66c7a1-f373-4b45-8deb-8763fa3ce1ab"
          }
          bgImg={rpdata?.stock?.[0]}
          bgImg1={rpdata?.stock?.[1]}
          bgImg2={rpdata?.stock?.[2]}
          bgImg3={rpdata?.stock?.[4]}
        />
        <BlockPrincipal
          title={rpdata?.dbSlogan?.[1]?.slogan}
          text={rpdata?.dbHome?.[0].text}
          image={rpdata?.stock?.[1]}
          image1={rpdata?.stock?.[10]}
          image2={rpdata?.stock?.[11]}
          image3={rpdata?.stock?.[12]}
          image4={rpdata?.stock?.[9]}
          corte={rpdata?.stock}
          sloganPrincipal={true}
          listServices={true}
        />
        <Directories />
        {/* video promocional */}
        {rpdata?.videosPromo?.[0]?.activo ? (
          <VideoPromocional
            title={rpdata?.dbSlogan?.[2]?.slogan}
            text={rpdata?.dbAbout?.[1]?.text}
            linkVideo={`${rpdata?.videosPromo?.[0].link}`}
            image={`${rpdata?.videosPromo?.[0].img}`}
            /* vimeoVideo */
          />
        ) : null}

        <BlockSecondary
          title={rpdata?.dbSlogan?.[3]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image1={rpdata?.stock?.[1]}
          image2={rpdata?.stock?.[2]}
          image3={rpdata?.stock?.[3]}
          image4={rpdata?.stock?.[0]}
        />
        <CounterUp image={rpdata?.stock?.[6]} />
        <BlockAbout
          title={"a little about us"}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.stock?.[5]}
          image1={rpdata?.stock?.[9]}
          image3={rpdata?.stock?.[9]}
          listsAbout={true}
        />
{/*         <ValuesOne
          image1={rpdata?.stock?.[4]}
          image2={rpdata?.stock?.[1]}
          image={rpdata?.stock?.[8]}
        /> */}
{/*         <SlideBlock
          title={"a little about us"}
          text={rpdata?.dbValues?.[2].description}
          image={rpdata?.stock?.[2]}
        /> */}

        {/* our reviews */}
        {rpdata?.reviews?.isHomeOnly === true ? (
          <div className="w-4/5 mx-auto py-[100px]">
            <h1 className="pb-10 text-center">
              {rpdata?.labels?.general?.titleReviews}
            </h1>
            <div className={`${rpdata?.reviews?.links?.[0]}`}></div>
          </div>
        ) : null}
        {/* <CustomReviews/> */}
        {/* Gallery cuando es OnePages */}
        {/* Servicios del home */}
        {rpdata?.simpleWidgets?.[3]?.activo ? (
          <div className="pt-20">
            <ContentServices />
          </div>
        ) : (
          <ServicesHome />
        )}
        {/* Paleta de Colores */}
        {rpdata?.simpleWidgets?.[3]?.activo ? (
          <div className="pt-10 pb-28">
            <h2 className="text-center pb-[50px]">
              {rpdata?.labels?.general?.titleGallery}
            </h2>
            <GalleryContent
              galleryImages={
                rpdata?.stock?.length > 0 ? rpdata?.stock : rpdata?.stock
              }
            />
          </div>
        ) : null}
        {rpdata?.brandingExtra?.[0]?.activo ? <Paletacolor /> : null}
        <div
          className="bgFormHome"
          style={{ backgroundImage: `url("${rpdata?.stock?.[8]}")` }}
        >
          <div className="relative">
            <FormHome />
          </div>
        </div>
        <Map />
      </div>
    </BaseLayout>
  );
}

export default Home;
