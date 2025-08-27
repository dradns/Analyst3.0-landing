import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModeCards from "@/components/ModeCards";
import Features from "@/components/Features";
import CourseCtaSectionWide from "@/components/CourseCtaSectionWide";
import CourseCtaSectionPositive from "@/components/CourseCtaSectionPositive";
import WhyImportant from "@/components/WhyImportant";
import LearningFormat from "@/components/LearningFormat";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ModeCards />
        <LearningFormat />
        <VideoPlayer />
        <Features />
        <CourseCtaSectionWide />
        <WhyImportant />
        <CourseCtaSectionPositive />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
