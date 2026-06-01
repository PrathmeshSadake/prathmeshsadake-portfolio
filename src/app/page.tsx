import HeroSection from "@/components/hero";
import ExperienceSection from "@/components/experience";
import ViewContainer from "@/components/view-container";
import ContactSection from "@/components/contact";
import FreelancePreview from "@/components/freelance-preview";
import BlogPreview from "@/components/blog-preview";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <BlogPreview />
      <FreelancePreview />
      {/* <ProjectSection />*/}
    </>
  );
};

export default Home;
