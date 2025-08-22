import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";
import ModeCards from "@/components/ModeCards";
import Features from "@/components/Features";
import CourseCtaSectionWide from "@/components/CourseCtaSectionWide";
import CourseStructure from "@/components/CourseStructure";
import CourseCtaSectionPositive from "@/components/CourseCtaSectionPositive";
import WhyImportant from "@/components/WhyImportant";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoPlayer />
        <ModeCards />
        <Features />
        <CourseCtaSectionWide />
        <CourseStructure />
        <WhyImportant />
        <CourseCtaSectionPositive />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
