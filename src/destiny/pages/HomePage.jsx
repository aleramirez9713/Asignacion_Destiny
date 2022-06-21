
import Footer from "../../ui/Footer";
import NavBar from "../../ui/NavBar";
import FloatingButton from "./components/FloatingButton";
import { FirstSection } from "./sections/FirstSection";
import { SecondSection } from "./sections/SecondSection";
import { ThirdSection } from "./sections/ThirdSection";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <FirstSection />

      <SecondSection />

      <ThirdSection/>

      <FloatingButton />
      
      <Footer />


     


    </>
  );
};
