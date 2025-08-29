import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModeCards from "@/components/ModeCards";
import Features from "@/components/Features";
import CourseCtaSectionWide from "@/components/CourseCtaSectionWide";
import CourseCtaSectionPositive from "@/components/CourseCtaSectionPositive";
import WhyImportant from "@/components/WhyImportant";
import LearningFormat from "@/components/LearningFormat";
import LearningTopics from "@/components/LearningTopics";
import CourseStructure from "@/components/CourseStructure";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";
import SectionWrapper from "@/components/SectionWrapper";
import RoadmapStep from "@/components/RoadmapStep";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Hero секция */}
        <SectionWrapper background="default">
          <Hero />
        </SectionWrapper>
        
        {/* Шаг 1: Программа курса */}
        <RoadmapStep stepNumber={1} title="Программа курса" isActive position="left" />
        <SectionTransition variant="hero-to-cards" />
        
        <SectionWrapper background="glass">
          <CourseStructure />
        </SectionWrapper>
        
        {/* Шаг 2: AI-агенты */}
        <RoadmapStep stepNumber={2} title="Вы научитесь создавать AI-агентов" position="right" />
        <SectionTransition variant="cards-to-learning" />
        
        <SectionWrapper background="default">
          <ModeCards />
        </SectionWrapper>
        
        {/* Шаг 3: Знания */}
        <RoadmapStep stepNumber={3} title="В процессе обучения вы узнаете, что такое" position="left" />
        <SectionTransition variant="learning-to-features" />
        
        <SectionWrapper background="muted">
          <LearningTopics />
        </SectionWrapper>
        
        {/* Шаг 4: Формат обучения */}
        <RoadmapStep stepNumber={4} title="Формат обучения" position="right" />
        <SectionTransition variant="features-to-cta" />
        
        <SectionWrapper background="glass">
          <LearningFormat />
        </SectionWrapper>
        
        {/* Шаг 5: Кому подойдет */}
        <RoadmapStep stepNumber={5} title="Кому подойдет курс" position="left" />
        <SectionTransition variant="cta-to-why" />
        
        <SectionWrapper background="default">
          <Features />
        </SectionWrapper>
        
        {/* Шаг 6: Не для всех */}
        <RoadmapStep stepNumber={6} title="Вам сюда не надо, если" position="right" />
        <SectionTransition variant="why-to-final" />
        
        <SectionWrapper background="gradient-primary">
          <CourseCtaSectionWide />
        </SectionWrapper>
        
        {/* Шаг 7: Важность */}
        <RoadmapStep stepNumber={7} title="Почему это важно" position="left" />
        <SectionTransition variant="cta-to-why" />
        
        <SectionWrapper background="muted">
          <WhyImportant />
        </SectionWrapper>
        
        {/* Шаг 8: Структура обучения */}
        <RoadmapStep stepNumber={8} title="Структура обучения - Начать первый урок" position="center" />
        <SectionTransition variant="why-to-final" />
        
        <SectionWrapper background="gradient-secondary">
          <CourseCtaSectionPositive />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;