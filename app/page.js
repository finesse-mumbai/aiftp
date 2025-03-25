import Header from "./components/Header/Header";
import PreHeader from "./components/Header/PreHeader";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test/Test";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import PresidentPage from "./components/PresidentPage/PresidentPage";
import ArticleList from "./article/ArcticleList";


export default function Home() {
  return (
    <>
      <PreHeader />
      <Header />
      <ImageSlider />
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] md:gap-4 gap-8  px-2 md:px-16 mt-8 md:mt-16">
        <PresidentPage />
        <ArticleList />
      </div>
      <Footer />
    </>
  );
}
