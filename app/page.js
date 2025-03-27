import Header from "./components/Header/Header";
import PreHeader from "./components/Header/PreHeader";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test/Test";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import PresidentPage from "./components/PresidentPage/PresidentPage";
import ArticleList from "./article/ArcticleList";
import Events from "./Events/Events";
import Heading from "./components/Heading/Heading";
import WhatsNewContainer from "./components/WhatsNew/WhatsNewContainer";
import LastSection from "./components/LastSection/LastSection";
import { TextHoverEffect } from "./components/Heading/TextHoverEffect";

export default function Home() {
  return (
    <>
      <PreHeader />
      <Header />
      <ImageSlider />
      <Events />
      <Heading/ >
      <div className="  mx-auto w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-[40%_60%] md:gap-4 gap-8  px-2 md:px-16 mt-8 md:mt-16">
        <PresidentPage />
        <ArticleList />
      </div>
      <WhatsNewContainer />
      <LastSection />
      <TextHoverEffect text="JOIN AIFTP" />

      <Footer />
    </>
  );
}
