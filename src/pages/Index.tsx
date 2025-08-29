import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModeCards from "@/components/ModeCards";
import Features from "@/components/Features";
import CourseCtaSectionWide from "@/components/CourseCtaSectionWide";
import CourseCtaSectionPositive from "@/components/CourseCtaSectionPositive";
import WhyImportant from "@/components/WhyImportant";
import LearningFormat from "@/components/LearningFormat";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";
import SectionWrapper from "@/components/SectionWrapper";
import RoadmapStep from "@/components/RoadmapStep";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden">
        {/* Hero секция с плавным фоном */}
        <SectionWrapper background="default">
          <Hero />
        </SectionWrapper>
        
        {/* Шаг 1: Выбор режима */}
        <RoadmapStep stepNumber={1} title="Выберите свой путь" isActive />
        <SectionTransition variant="hero-to-cards" />
        
        {/* Карточки режимов с мягким фоном */}
        <SectionWrapper background="glass">
          <ModeCards />
        </SectionWrapper>
        
        {/* Шаг 2: Формат обучения */}
        <RoadmapStep stepNumber={2} title="Изучите формат" position="right" />
        <SectionTransition variant="cards-to-learning" />
        
        {/* Формат обучения */}
        <SectionWrapper background="muted">
          <LearningFormat />
        </SectionWrapper>
        
        {/* Шаг 3: Возможности */}
        <RoadmapStep stepNumber={3} title="Откройте возможности" position="left" />
        <SectionTransition variant="learning-to-features" />
        
        {/* Функции курса */}
        <SectionWrapper background="default">
          <Features />
        </SectionWrapper>
        
        {/* Шаг 4: Присоединение */}
        <RoadmapStep stepNumber={4} title="Присоединяйтесь к курсу" position="right" />
        <SectionTransition variant="features-to-cta" />
        
        {/* Широкий CTA блок */}
        <SectionWrapper background="gradient-primary">
          <CourseCtaSectionWide />
        </SectionWrapper>
        
        {/* Шаг 5: Понимание важности */}
        <RoadmapStep stepNumber={5} title="Поймите важность AI" position="left" />
        <SectionTransition variant="cta-to-why" />
        
        {/* Почему важно */}
        <SectionWrapper background="default">
          <WhyImportant />
        </SectionWrapper>
        
        {/* Шаг 6: Финальное решение */}
        <RoadmapStep stepNumber={6} title="Начните свой путь" />
        <SectionTransition variant="why-to-final" />
        
        {/* Финальный CTA */}
        <SectionWrapper background="gradient-secondary">
          <CourseCtaSectionPositive />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
